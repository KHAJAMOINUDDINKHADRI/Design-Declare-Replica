import React from "react";

const EmergencySection = () => {
  const acts = [
    {
      number: "1",
      title: "Sound the Alarm",
      description:
        "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice.",
    },
    {
      number: "2",
      title: "Start the Journey",
      description:
        "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start.",
    },
    {
      number: "3",
      title: "Bring Clients with Us",
      description:
        "Meaningfully consider environmental and social impacts as part of every pitch, proposal and project. Use our influence to push for more sustainable outcomes.",
    },
    {
      number: "4",
      title: "Measure What We Make",
      description:
        "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out.",
    },
    {
      number: "5",
      title: "Redefine 'Good'",
      description:
        "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards.",
    },
    {
      number: "6",
      title: "Educate, Accelerate",
      description:
        "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry.",
    },
    {
      number: "7",
      title: "Design for Justice",
      description:
        "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world.",
    },
    {
      number: "8",
      title: "Amplify Voices for Change",
      description:
        "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change.",
    },
  ];

  return (
    <section
      id="emergency"
      className="min-h-screen bg-black text-white px-8 lg:px-8 py-16"
    >
      <div className="flex items-start justify-between">
        <div className="flex-shrink-0 sticky top-0 self-start w-[600px]">
          <h2 className="text-2xl font-bold mb-8">8 Acts of Emergency</h2>
        </div>

        <div className="flex-1 ml-2">
          <div className="mb-12">
            <p className="text-2xl leading-relaxed mb-8">
              What does it take to Declare? It's accepting we are in an
              emergency of climate and nature, and a commitment to do something
              about it. Here are eight places to start:
            </p>
          </div>

          <div className="space-y-8">
            {acts.map((act, idx) => (
              <div key={act.number} className="group">
                <div className="flex items-center border border-black bg-white text-black">
                  <h3 className="font-h1 flex w-full leading-none text-black">
                    <span className="flex size-[3rem] text-4xl flex-shrink-0 items-center justify-center tabular-nums md:size-[4.5rem]">
                      {act.number}
                    </span>
                    <span className="flex w-full text-4xl items-center border-l border-black p-2">
                      {act.title}
                    </span>
                  </h3>
                </div>
                <div className="flex border-x border-black group-last:border-b p-2 bg-white text-black">
                  <div className="my-6">
                    <p>{act.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
