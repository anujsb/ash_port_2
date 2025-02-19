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
            As a passionate Computer Engineering student, I bring adaptability
            and a strong foundation in technology to contribute effectively to
            the Software Project. With proficiency in UI/UX design using tools
            like Figma and a solid understanding of data science, I assure
            dedication to project guidelines and professionalism throughout. My
            technical skills and commitment make me a strong fit for this role.
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
          

              <Menu />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
