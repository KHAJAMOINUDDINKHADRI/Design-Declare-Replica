import React from "react";

const LatestSection = () => {
  const articles = [
    {
      category: "Events",
      location: "D! UK",
      date: "24.04.2025, 03 PM:30",
      title:
        "SD4P Collective: How can Service Design drive meaningful sustainability impact",
      subtitle: "Recap: SD4P Collective working session – 28th March 2025",
      link: "Read story",
    },
    {
      category: "Events",
      location: "D! UK",
      date: "06.12.2024, 02 PM:30",
      title: "Designing Tomorrow: Speculative Thinking Shapes Our Present",
      subtitle:
        "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
      link: "Read story",
    },
  ];

  return (
    <section
      id="latest"
      className="min-h-screen bg-black text-white px-8 lg:px-8 py-16"
    >
      <div className="flex items-start justify-between">
        <div className="flex-shrink-0 sticky top-0 self-start w-[600px]">
          <h2 className="text-2xl font-bold mb-8">Latest</h2>
        </div>

        <div className="flex-1 ml-2">
          <div className="space-y-12">
            {articles.map((article, index) => (
              <article key={index} className="space-y-4">
                <div className="flex gap-4 text-sm">
                  <span className="bg-gray-600 px-3 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="bg-gray-600 px-3 py-1 rounded">
                    {article.location}
                  </span>
                  <span className="text-gray-400">{article.date}</span>
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex-1 w-auto">
                    <h3 className="text-4xl mb-2 w-80">{article.title}</h3>
                  </div>
                  <div className="ml-8 text-xl">
                    <p className="text-gray-300 mb-2">{article.subtitle}</p>
                    <a
                      href="#"
                      className="text-white underline hover:text-[#FF5E40] transition-colors duration-300"
                    >
                      {article.link}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300">
              See all the latest
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestSection;
