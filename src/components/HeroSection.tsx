import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [showD, setShowD] = useState(false);
  const [showMainText, setShowMainText] = useState(false);

  useEffect(() => {
    // Show "D!" first with left to right animation
    const timer1 = setTimeout(() => {
      setShowD(true);
    }, 500);

    // Then show main text with bottom to top animation
    const timer2 = setTimeout(() => {
      setShowMainText(true);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-start justify-between px-8 lg:px-6 py-6 relative overflow-hidden"
    >
      {/* D! Animation - Top Left */}
      <div
        className={`absolute top-8 left-8 lg:left-16 z-10 transition-all duration-1000 ${
          showMainText ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="text-[8rem] lg:text-[12rem] font-black text-[#FF5E40] overflow-hidden">
          <span
            className={`inline-block transition-all duration-500 delay-0 transform ${
              showD
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            D
          </span>
          <span
            className={`inline-block transition-all duration-500 delay-200 transform ${
              showD
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            !
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-1000 ${
          showMainText ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1
          className={`text-[8rem] lg:text-[12rem] xl:text-[10rem] font-black leading-none tracking-tight [font-family:'Druk Condensed']`}
        >
          <span className="block overflow-hidden">
            <span
              className={`block transform transition-transform duration-700 ${
                showMainText
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              DESIGN
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className={`block transform transition-transform duration-700 ${
                showMainText
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              DECLARES
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className={`block text-[#FF5E40] transform transition-transform duration-700 ${
                showMainText
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              UK
            </span>
          </span>
        </h1>
      </div>

      <div
        className={`flex-1 max-w-lg ml-2 transform transition-all duration-1500 delay-500 ${
          showMainText ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
        }`}
      >
        <div className="" style={{ opacity: 1, transform: "none" }}>
          <p className="max-w-lg lg:ml-auto lg:mr-0">
            Design Declares is a growing group of designers, design studios,
            agencies and institutions here to declare a climate and ecological
            emergency. As part of the global declaration movement, we commit to
            harnessing the tools of our industry to reimagine, rebuild and heal
            our world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
