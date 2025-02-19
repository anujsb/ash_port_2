import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className=" bg-white">
      <div>
        <section className="w-full max-w-5xl mx-auto px-4 py-8 md:py-16 relative">
          <div className="absolute hidden lg:block right-0 top-32 w-64 h-64 lg:w-96 lg:h-96">
            {/* <div className="w-full h-full border-r-[3px] border-neutral-400 rounded-br-[500px]" /> */}
          </div>

          <div className="space-y-12 md:space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-800 uppercase">
                contact
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
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-light text-gray-600 mb-4">
                    E-MAIL
                  </h2>
                  <Link
                    href="mailto:ayshivgan@gmail.com"
                    className="text-lg text-gray-600 hover:text-gray-900 transition-colors "
                  >
                    ↗ ayshivgan@gmail.com
                  </Link>
                </div>
                <div>
                  <h2 className="text-2xl font-light text-gray-600 mb-4 uppercase">
                    socials
                  </h2>
                  <div className="space-y-2">
                    <Link
                      href="https://github.com/Ashlesha2003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      ↗ Github
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/ashlesha-shivgan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      ↗ Linkedin
                    </Link>
                    {/* <Link
                      href="https://www.21bubbles.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      ↗ Agency
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
