import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const BreakdownSection = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    {
      id: "role-of-design",
      title: "The Role of Design",
      contentLeft:
        "As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.",
      contentRight:
        "Because designers are makers. We make ideas real. We generate solutions. We build the world - dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It's not quite magic, but it feels like it.",
    },
    {
      id: "time-for-change",
      title: "Time for Change",
      contentLeft:
        "Together with our clients, partners and colleagues across the supply chain, we are daring to reimagine the way we create every product, service, campaign and designed solution we put out into the world. This means measuring and actively reducing the greenhouse gas emissions and resource use linked to our designs.",
      contentRight:
        "It means introducing principles of sustainability, circularity and - ultimately - regenerative design into our practice to recapture and repurpose resources and materials. And it means acting systemically - seeing the bigger picture and working with others to sharpen design's incredible capacity to influence and accelerate climate repair and justice.",
    },
    {
      id: "act-with-urgency",
      title: "Act with Urgency",
      contentLeft:
        "We know all we need to make this a reality. The information, the guidance, the inspiration and solutions are there. What design needs now is action - meaningful steps that can begin to connect what we know to what we do.",
      contentRight:
        "This is the most important brief of our lives. Join us as we begin to design a climate-positive future.",
    },
  ];

  return (
    <section
      id="breakdown"
      className="min-h-screen bg-black text-white px-8 lg:px-8 py-16"
    >
      <div className="flex items-start justify-between">
        <div className="flex-shrink-0 sticky top-0 self-start w-[600px]">
          <h2 className="text-2xl font-bold mb-8">This is Breakdown</h2>
        </div>

        <div className="flex-1 ml-2">
          <div className="mb-12">
            <h3 className="text-4xl lg:text-5xl font-light leading-tight mb-8">
              The science is settled. We are in an emergency of climate and
              nature. The world is past breaking point; the breakdown has
              begun...
            </h3>
          </div>

          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="border-t border-gray-600">
                <button
                  onClick={() =>
                    setOpenSection(
                      openSection === section.id ? null : section.id
                    )
                  }
                  className="w-full py-6 flex items-center justify-between text-left hover:text-[#FF5E40] transition-colors duration-300"
                >
                  <span className="text-xl font-medium">{section.title}</span>
                  <ChevronDown
                    className={`transform transition-transform duration-300 ${
                      openSection === section.id ? "rotate-180" : ""
                    }`}
                    size={24}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openSection === section.id ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <p className="text-gray-300 leading-relaxed flex-1">
                      {section.contentLeft}
                    </p>
                    <p className="text-gray-300 leading-relaxed flex-1">
                      {section.contentRight}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300">
              View our D! Intro Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakdownSection;
