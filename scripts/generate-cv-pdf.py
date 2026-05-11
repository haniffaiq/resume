#!/usr/bin/env python3
"""Generate public/hanif-faiq-cv.pdf from docs/hanif-faiq-cv.md.

This intentionally uses only the Python standard library and PDF base fonts so the
CV asset can be regenerated without adding project runtime dependencies.
"""

from __future__ import annotations

import html
import re
import sys
import textwrap
from dataclasses import dataclass
from pathlib import Path

PAGE_W = 595  # A4 points
PAGE_H = 842
MARGIN_X = 42
MARGIN_TOP = 42
MARGIN_BOTTOM = 42
BODY_WIDTH = PAGE_W - (MARGIN_X * 2)
SOURCE = Path("docs/hanif-faiq-cv.md")
OUTPUT = Path("public/hanif-faiq-cv.pdf")


@dataclass
class DrawLine:
    text: str
    size: int = 9
    font: str = "F1"
    leading: int = 11
    gap_before: int = 0


def strip_html_comments(text: str) -> str:
    return re.sub(r"<!--.*?-->", "", text, flags=re.S)


def line_width_chars(size: int) -> int:
    # Approximate average Helvetica character width at this font size.
    return max(38, int(BODY_WIDTH / (size * 0.48)))


def wrap_line(text: str, size: int) -> list[str]:
    text = " ".join(text.split())
    if not text:
        return [""]
    return textwrap.wrap(
        text,
        width=line_width_chars(size),
        break_long_words=False,
        break_on_hyphens=False,
    ) or [text]


def parse_markdown(markdown: str) -> list[DrawLine]:
    lines: list[DrawLine] = []
    previous_blank = True
    for raw in strip_html_comments(markdown).splitlines():
        raw = html.unescape(raw.rstrip())
        if not raw.strip():
            previous_blank = True
            continue

        gap = 5 if previous_blank and lines else 0
        previous_blank = False

        if raw.startswith("# "):
            for part in wrap_line(raw[2:].strip(), 20):
                lines.append(DrawLine(part, size=20, font="F2", leading=23, gap_before=0))
            continue
        if raw.startswith("## "):
            for part in wrap_line(raw[3:].strip().upper(), 12):
                lines.append(DrawLine(part, size=12, font="F2", leading=15, gap_before=9))
            continue
        if raw.startswith("### "):
            for idx, part in enumerate(wrap_line(raw[4:].strip(), 9)):
                lines.append(DrawLine(part, size=9, font="F2", leading=11, gap_before=gap if idx == 0 else 0))
            continue
        if raw.startswith("- "):
            bullet_text = raw[2:].strip()
            wrapped = wrap_line(bullet_text, 8)
            for idx, part in enumerate(wrapped):
                prefix = "• " if idx == 0 else "  "
                lines.append(DrawLine(prefix + part, size=8, font="F1", leading=10, gap_before=gap if idx == 0 else 0))
            continue

        for idx, part in enumerate(wrap_line(raw.strip(), 9)):
            lines.append(DrawLine(part, size=9, font="F1", leading=11, gap_before=gap if idx == 0 else 0))
    return lines


def escape_pdf_text(text: str) -> str:
    # PDFDocEncoding-compatible subset with bullets normalized to a text-safe marker.
    text = text.replace("•", "-")
    replacements = {
        "–": "-",
        "—": "-",
        "“": '"',
        "”": '"',
        "‘": "'",
        "’": "'",
        "…": "...",
    }
    for src, dst in replacements.items():
        text = text.replace(src, dst)
    text = text.encode("latin-1", "replace").decode("latin-1")
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def paginate(lines: list[DrawLine]) -> list[list[tuple[int, DrawLine]]]:
    pages: list[list[tuple[int, DrawLine]]] = [[]]
    y = PAGE_H - MARGIN_TOP
    for line in lines:
        y -= line.gap_before
        if y - line.leading < MARGIN_BOTTOM:
            pages.append([])
            y = PAGE_H - MARGIN_TOP
        pages[-1].append((y, line))
        y -= line.leading
    return pages


def make_stream(page_lines: list[tuple[int, DrawLine]]) -> bytes:
    parts = ["BT"]
    for y, line in page_lines:
        parts.append(f"/{line.font} {line.size} Tf")
        parts.append(f"{MARGIN_X} {y} Td")
        parts.append(f"({escape_pdf_text(line.text)}) Tj")
        parts.append(f"-{MARGIN_X} -{y} Td")
    parts.append("ET")
    return ("\n".join(parts) + "\n").encode("latin-1", "replace")


def write_pdf(pages: list[list[tuple[int, DrawLine]]], output: Path) -> None:
    objects: list[bytes] = []

    def add_object(payload: bytes) -> int:
        objects.append(payload)
        return len(objects)

    catalog_id = add_object(b"<< /Type /Catalog /Pages 2 0 R >>")
    pages_id = add_object(b"PLACEHOLDER")
    font_regular_id = add_object(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    font_bold_id = add_object(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")

    page_ids: list[int] = []
    for page in pages:
        stream = make_stream(page)
        stream_id = add_object(
            b"<< /Length " + str(len(stream)).encode() + b" >>\nstream\n" + stream + b"endstream"
        )
        page_id = add_object(
            (
                f"<< /Type /Page /Parent {pages_id} 0 R /MediaBox [0 0 {PAGE_W} {PAGE_H}] "
                f"/Resources << /Font << /F1 {font_regular_id} 0 R /F2 {font_bold_id} 0 R >> >> "
                f"/Contents {stream_id} 0 R >>"
            ).encode()
        )
        page_ids.append(page_id)

    kids = " ".join(f"{pid} 0 R" for pid in page_ids)
    objects[pages_id - 1] = f"<< /Type /Pages /Kids [{kids}] /Count {len(page_ids)} >>".encode()
    assert catalog_id == 1

    output.parent.mkdir(parents=True, exist_ok=True)
    with output.open("wb") as fh:
        fh.write(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
        offsets = [0]
        for idx, obj in enumerate(objects, start=1):
            offsets.append(fh.tell())
            fh.write(f"{idx} 0 obj\n".encode())
            fh.write(obj)
            fh.write(b"\nendobj\n")
        xref_at = fh.tell()
        fh.write(f"xref\n0 {len(objects) + 1}\n".encode())
        fh.write(b"0000000000 65535 f\n")
        for off in offsets[1:]:
            fh.write(f"{off:010d} 00000 n\n".encode())
        fh.write(
            (
                f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\n"
                f"startxref\n{xref_at}\n%%EOF\n"
            ).encode()
        )


def main() -> int:
    source = Path(sys.argv[1]) if len(sys.argv) > 1 else SOURCE
    output = Path(sys.argv[2]) if len(sys.argv) > 2 else OUTPUT
    if not source.exists():
        print(f"Missing source: {source}", file=sys.stderr)
        return 1
    lines = parse_markdown(source.read_text(encoding="utf-8"))
    pages = paginate(lines)
    write_pdf(pages, output)
    print(f"Generated {output} from {source} ({len(pages)} pages)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
