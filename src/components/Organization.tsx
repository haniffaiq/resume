import { Card } from "@/components/ui/card";
import { organisations } from "@/data/organisations";
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
