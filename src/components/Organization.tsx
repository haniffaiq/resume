import { Card } from "@/components/ui/card";

const organisations = [
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

const Organisations = () => {
  return (
    <section
      id="organisations"
      className="py-20 bg-gradient-dark text-primary-foreground"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Organisational Experience</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Leadership and community contributions across various organisations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {organisations.map((org, index) => (
            <Card
              key={index}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold text-white">{org.role}</h3>
                  <p className="text-lg text-blue-300">{org.name}</p>
                  <p className="text-gray-400 text-sm mb-2">{org.location}</p>
                  <span className="inline-block mb-4 px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                    {org.period}
                  </span>
                  <p className="text-gray-300 mb-4">{org.description}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    {org.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organisations;
