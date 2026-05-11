import { experiences } from "@/data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-dark text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Experience</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional journey building scalable systems and leading technical initiatives
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.position}-${index}`}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Section */}
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                  <p className="text-lg text-blue-300">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                  <span className="inline-block mt-2 px-4 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                    {exp.period}
                  </span>
                </div>

                {/* Right Section */}
                <div className="lg:col-span-2">
                  <p className="text-gray-300 mb-3 leading-relaxed">{exp.description}</p>

                  <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
