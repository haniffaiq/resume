import { Card } from "@/components/ui/card";
import { Linkedin, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Social proof
          </p>
          <h2 className="text-4xl font-bold mt-3 mb-4">Recommendations</h2>
          <p className="text-lg text-surface-medium max-w-2xl mx-auto">
            Written by colleagues and teammates on LinkedIn.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {testimonials.map((testimonial) => (
            <Card
              key={`${testimonial.name}-${testimonial.date}`}
              className="flex h-full flex-col p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="inline-flex rounded-xl bg-primary/10 p-2.5 text-primary">
                  <Quote size={20} aria-hidden="true" />
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-surface-medium">
                  <Linkedin size={13} aria-hidden="true" />
                  LinkedIn
                </span>
              </div>

              <blockquote className="flex-1 text-[15px] leading-relaxed text-foreground">
                {testimonial.quote}
              </blockquote>

              <footer className="mt-6 border-t pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="mt-0.5 text-sm text-surface-medium">{testimonial.role}</p>
                <p className="mt-2 text-xs text-surface-medium">
                  {testimonial.relationship} · {testimonial.date}
                </p>
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
