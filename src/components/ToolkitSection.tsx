import React from "react";

const ToolkitSection = () => {
  return (
    <section
      id="toolkit"
      className="min-h-screen bg-black text-white px-8 lg:px-8 py-16"
    >
      <div className="flex items-start justify-between">
        <div className="flex-shrink-0 sticky top-0 self-start w-[600px]">
          <h2 className="text-2xl font-bold mb-8">
            The Design Declares Newsletter and Toolkit
          </h2>
        </div>

        <div className="flex-1 ml-2">
          {/* Toolkit Image Placeholder */}
          <div className="mb-52 relative">
            <div className="bg-gray-800 h-64 rounded-lg flex items-start justify-center">
              <div className="text-center">
                <img
                  src="/toolkit.webp"
                  alt="Design Declares Toolkit"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-2xl leading-relaxed mb-6">
              Subscribe to the Design Declares UK newsletter to receive the
              latest news and updates. By signing up you will also gain access
              to The Design Declares Toolkit, a live and evolving Notion site
              co-created with our community. It is filled with the latest
              resources and methods to help you on your journey to
              climate-positive design.
            </p>
            <p className="text-lg leading-relaxed">
              Every signatory to Design Declares will receive an access link to
              the Toolkit. If you are unable to declare emergency quite yet, you
              can still access the Toolkit - just register below.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-white font-medium"
              >
                Email:
              </label>
              <input
                type="email"
                placeholder="khajamoinuddinkhadri786@gmail.com"
                className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white placeholder-gray-400"
              />
            </div>

            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                className="w-5 h-5 border-2 border-white bg-transparent mt-1"
              />
              <span className="text-sm">
                I would like to be added to the Design Declares! newsletter and
                receive further updates.
              </span>
            </label>

            <div className="pt-4">
              <a href="#" className="text-white underline text-sm">
                View our Privacy Policy
              </a>
            </div>

            <button
              type="submit"
              className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;
