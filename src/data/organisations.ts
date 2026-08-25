export type Organisation = {
  name: string;
  role: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
};

export const organisations: Organisation[] = [
  {
    name: "Mozilla Indonesia",
    role: "Volunteer",
    location: "Jakarta, Indonesia",
    period: "Mar 2018 - Mar 2023",
    description:
      "Contributed as a keyholder and community organizer for Mozilla Indonesia.",
    achievements: [
      "Acted as a keyholder for Mozilla Indonesia",
      "Organized events, workshops, and community gatherings",
      "Delivered presentations on Mozilla and open-source tech",
      "Coordinated logistics and community initiatives",
    ],
  },
  {
    name: "Antenna Laboratory, Telkom University",
    role: "Antenna Research and Development Assistant",
    location: "Bandung, Indonesia",
    period: "Feb 2019 - Jul 2022",
    description:
      "Assisted with research and development projects at the Antenna Laboratory, Universitas Telkom.",
    achievements: [
      "Participated in antenna research and development projects",
      "Collaborated with researchers and engineers",
      "Performed experiments, data collection, and analysis",
      "Gained hands-on experience in antenna design and testing",
    ],
  },
  {
    name: "HMTT (Himpunan Mahasiswa Teknik Telekomunikasi)",
    role: "Research and Development Team Lead",
    location: "Bandung, Indonesia",
    period: "Jun 2018 - Nov 2018",
    description:
      "Led the Research and Development (R&D) Team exploring telecommunications innovations.",
    achievements: [
      "Directed a team focused on telecom exploration and innovation",
      "Spearheaded IoT solution project for Margamukti Village, West Java",
      "Oversaw planning, execution, and implementation",
      "Facilitated collaboration and managed stakeholders",
    ],
  },
  {
    name: "Electro Club, SMK Telkom Jakarta",
    role: "Leader",
    location: "Jakarta, Indonesia",
    period: "Aug 2016 - Aug 2017",
    description:
      "Led Electro Club, a student organization centered on electronics and technology.",
    achievements: [
      "Managed club activities, events, and projects",
      "Provided mentorship to members",
      "Organized workshops, competitions, and educational initiatives",
      "Fostered collaboration and innovation",
    ],
  },
];
