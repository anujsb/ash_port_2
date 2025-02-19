import React from "react";
import Menu from "./MenuItem";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div>
        <section className="w-full max-w-5xl mx-auto px-4 py-8 md:py-16 relative">
          <div className="absolute hidden lg:block right-0 top-32 w-64 h-64 lg:w-96 lg:h-96">
            <div className="w-full h-full border-r-[3px] border-neutral-400 rounded-br-[500px]" />
          </div>
          <div className="mb-8 w-2/3">
            I’m Anuj Bhuyar, a full-stack developer passionate about building
            innovative, user-focused web applications. With expertise in React,
            Next.js, Tailwind CSS, and Node.js, I craft seamless frontends and
            powerful backends. I’m always exploring new technologies and
            integrating AI solutions to create smarter, more intuitive
            experiences. Let’s build something amazing!
          </div>

          <div className="space-y-12 md:space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-800">
                SKILLS
              </h2>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-neutral-800" />
                  <div className="w-2 h-2 rounded-full bg-neutral-800" />
                  <div className="w-2 h-2 rounded-full bg-neutral-800" />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* <div className="space-y-4">
                <h3 className="text-xl md:text-2xl text-neutral-700">Core</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {["HTML", "CSS", "JS"].map((skill) => (
                    <div
                      key={skill}
                      className="bg-neutral-800 text-white p-4 rounded-lg relative"
                    >
                      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-background" />
                      <div className="text-lg font-medium">{skill}</div>
                    </div>
                  ))}
                </div>
              </div>


              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl text-neutral-700">
                  Libraries & Frameworks
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {["React", "Next.js", "Redux"].map((skill) => (
                    <div
                      key={skill}
                      className="bg-neutral-800 text-white p-4 rounded-lg relative"
                    >
                      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-background" />
                      <div className="text-lg font-medium">{skill}</div>
                    </div>
                  ))}
                </div>
              </div>


              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl text-neutral-700">
                  Tools & Platforms
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {["Git", "Figma", "Vercel"].map((skill) => (
                    <div
                      key={skill}
                      className="bg-neutral-800 text-white p-4 rounded-lg relative"
                    >
                      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-background" />
                      <div className="text-lg font-medium">{skill}</div>
                    </div>
                  ))}
                </div>
              </div> */}

              <Menu />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
