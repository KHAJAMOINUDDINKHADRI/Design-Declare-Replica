import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const DeclareSection = () => {
  const [formData, setFormData] = useState({
    declarationType: "",
    website: "",
    country: "United Kingdom",
    discipline: "",
    email: "",
    reason: "",
    dataConsent: false,
    newsletter: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section
      id="declare"
      className="min-h-screen bg-black text-white px-8 lg:px-8 py-16"
    >
      <div className="flex items-start justify-between">
        <div className="flex-shrink-0 sticky top-0 self-start w-[600px]">
          <h2 className="text-2xl font-bold mb-8">Declare Emergency Now</h2>
        </div>

        <div className="flex-1 ml-2">
          <div className="mb-12">
            <p className="text-2xl leading-relaxed mb-8">
              Design Declares is open to individuals and institutions working in
              industrial, digital, graphic, communication and service design. To
              declare here, you must be a company with an office in the UK
              employing at least one full-time designer. We also welcome
              declarations from practising freelance designers who are
              registered as self-employed in the UK, and global supporters from
              other countries. All declarations will be named and published on
              this site.
            </p>
          </div>

          <div className="border border-gray-600 p-8">
            <h3 className="text-6xl mb-8">I am Declaring Emergency</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="declarationType"
                    value="business"
                    className="w-5 h-5 border-2 border-white bg-transparent"
                  />
                  <span>As a business</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="declarationType"
                    value="individual"
                    className="w-5 h-5 border-2 border-white bg-transparent"
                  />
                  <span>As an individual</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="declarationType"
                    value="institution"
                    className="w-5 h-5 border-2 border-white bg-transparent"
                  />
                  <span>As a public institution</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="declarationType"
                    value="team"
                    className="w-5 h-5 border-2 border-white bg-transparent"
                  />
                  <span>As a team or department</span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="businessname"
                  className="block mb-2 text-white font-medium"
                >
                  Business Name:
                </label>
                <input
                  type="text"
                  name="businessname"
                  placeholder="JenVoice"
                  className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white placeholder-gray-400"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block mb-2 text-white font-medium"
                >
                  Website:
                </label>
                <input
                  type="text"
                  name="website"
                  placeholder="JenVoice.com"
                  className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white placeholder-gray-400"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block mb-2 text-white font-medium"
                >
                  Country:
                </label>
                <select
                  id="country"
                  name="country"
                  className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white appearance-none"
                  onChange={handleInputChange}
                  value={formData.country}
                >
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United Kingdom">
                    United States of America
                  </option>
                  <option value="United Kingdom">United Arab Emirates</option>
                  <option value="United Kingdom">Saudi Arabia</option>
                  <option value="Other">India</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  size={20}
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="discipline"
                  className="block mb-2 text-white font-medium"
                >
                  Discipline:
                </label>
                <select
                  name="discipline"
                  className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white appearance-none"
                  onChange={handleInputChange}
                >
                  <option value="graphic">Communication Design</option>
                  <option value="digital">Digital Design</option>
                  <option value="service">Service Design</option>
                  <option value="industrial">Product Design</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  size={20}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-white font-medium"
                >
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="khajamoinuddinkhadri786@gmail.com"
                  className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white placeholder-gray-400"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <textarea
                  name="reason"
                  placeholder="Why are you declaring? In a sentence or two, tell us why you're joining Design Declares."
                  rows={4}
                  className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white placeholder-gray-400 resize-none"
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-4">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="dataConsent"
                    className="w-5 h-5 border-2 border-white bg-transparent mt-1"
                    onChange={handleInputChange}
                  />
                  <span className="text-sm">
                    I consent for my data to be used for the purpose of the
                    Declaration, and for my name and reason for joining to be
                    used in the promotion of the Declaration on this site and
                    across our social channels.
                  </span>
                </label>

                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="newsletter"
                    className="w-5 h-5 border-2 border-white bg-transparent mt-1"
                    onChange={handleInputChange}
                  />
                  <span className="text-sm">
                    I would like to be added to the Design Declares! newsletter
                    and receive further updates.
                  </span>
                </label>
              </div>

              <div className="pt-4">
                <a href="#" className="text-white underline text-sm">
                  View our Privacy Policy
                </a>
              </div>

              <button
                type="submit"
                className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                Declare Emergency Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeclareSection;
