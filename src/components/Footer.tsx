import React from "react";

const Footer = () => {
  const signatories = [
    "Marnie Hawson",
    "Martin Tomlison",
    "MER Studio",
    "Motherbird",
    "Nachaa Studio",
    "Nila Rezaei",
    "Particle Design Studio",
    "Philip Ely PhD",
    "philo & co",
    "Plainfree",
    "Rany Studio",
    "Reny®",
    "Ricardo Sosa",
    "Soundaryaware",
    "Design Team at WIS",
    "Learn",
    "DJ",
    "Doga Nunes",
    "Diogo Lucato",
    "Didi Saudaval",
    "Echos",
    "Eduardo Mela",
    "Eliane Moraes",
    "Empathy Company",
    "Estúdio Atômico",
    "Estúdio Guto Requena",
    "Estúdio Marte",
    "Faras Saba Jr",
    "Sandra Ribeiro Cameira",
    "Símbio Design",
    "Studio Clajus",
    "tellus",
    "Thayana",
    "Thiago Barreto",
    "Thiago Vieira Marques",
    "Thoz",
    "tiago taveira",
    "Tudo de Acessibilidade",
    "UEKJ",
    "Vagner Trevisan",
    "Vanessa Silva",
    "Victor Maluhy",
    "Victor Mascarenhas",
    "Jessica Metro",
    "Joseph Sapir",
    "Katharina Winter",
    "Matt Tyas",
    "NEW",
    "STANDARD STUDIO",
    "Paolo da Veiga",
    "Philip Hugle",
    "Plan C Studio",
    "Schobert-Richter",
    "STUDIO COW",
    "The Design & Emotion",
    "Thorsten Jonas",
    "Tillmann Schrempf",
  ];

  return (
    <footer className="bg-black text-white">
      {/* New Signatory Count Section */}
      <div className="px-8 lg:px-16 py-8">
        <div>
          <span className="block max-w-fit text-6xl">#514</span>
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-h3">Signatories and counting in </span>
            <span className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-orange-600 text-black">
              D! UK
            </span>
          </span>
        </div>
      </div>

      {/* Signatories Grid */}
      <div className="px-8 lg:px-16 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
          {signatories.map((name, index) => (
            <div
              key={index}
              className="hover:text-[#] transition-colors duration-300 cursor-pointer"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* New Signatory Count Section */}
      <div className="px-8 lg:px-16 py-8">
        <div>
          <span className="block max-w-fit text-6xl">#663</span>
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-h3">Global Supporters </span>
          </span>
        </div>
      </div>

      <div className="px-8 lg:px-16 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
          {signatories.map((name, index) => (
            <div
              key={index}
              className="hover:text-[#FF5E40] transition-colors duration-300 cursor-pointer"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-[#FF5E40] text-black px-8 lg:px-8 py-8 rounded-t-xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Logo */}
          <div className="flex-1">
            <h2 className="text-4xl lg:text-6xl font-black leading-none">
              DESIGN
              <br />
              DECLARES
            </h2>
          </div>

          {/* Links */}
          <div className="pl-6">
            <div className="flex">
              <div className="flex-1">
                <div className="space-y-2">
                  <a href="#" className="block text-lg hover:underline">
                    Contact
                  </a>
                  <a href="#" className="block text-lg hover:underline">
                    Instagram
                  </a>
                  <a href="#" className="block text-lg hover:underline">
                    LinkedIn
                  </a>
                  <a href="#" className="block text-lg hover:underline">
                    Privacy Policy
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">
                  Sign up to the D! Newsletter
                </h3>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email:*"
                    className="w-full bg-transparent border-2 border-black px-4 py-3 placeholder-black"
                  />
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border-2 border-black bg-transparent mt-1"
                    />
                    <span className="text-sm">
                      I would like to be added to the Design Declares!
                      newsletter and receive further updates.
                    </span>
                  </label>
                  <a href="#" className="block text-sm underline">
                    View our Privacy Policy
                  </a>
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div>
              <div className="mt-8 pt-8 text-sm">
                <p className="mb-2 text-black">
                  This website has been built following low-carbon principles of
                  web development and hosted using serverless computing, by only
                  allocating energy when needed and on demand.{" "}
                  <a href="#" className="underline">
                    Learn more about our carbon footprint.
                  </a>
                </p>
                <p className="text-black">
                  Empowered by{" "}
                  <a href="#" className="underline">
                    Driftme®
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
