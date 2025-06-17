import React from "react";

const DonateSection = () => {
  const donationAmounts = ["£10", "£20", "£50"];

  return (
    <section className="min-h-fit mt-20 mb-20 bg-black text-white px-8 lg:px-8 py-8">
      <div className="flex items-start justify-between">
        <div className="flex-shrink-0 sticky top-0 self-start w-[600px]">
          <h2 className="text-2xl font-bold mb-8">Donate to D!</h2>
        </div>

        <div className="w-full max-w-3xl ml-2">
          <div className="mb-12">
            <p className="text-2xl leading-relaxed mb-8">
              Design Declares is a CIC and would not exist without our dedicated
              team of co-steers, volunteers, and our passionate community
              working towards change in the creative industry. Your support can
              go a long way, and helps us too continue the valuable work needed
              in tackling the climate crises. If you believe in the work we do,
              please consider a small donation to help us on our journey for a
              more equitable and just planet.
            </p>
          </div>

          <div className="flex gap-4 mb-16">
            {donationAmounts.map((amount) => (
              <button
                key={amount}
                className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                Donate {amount}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
