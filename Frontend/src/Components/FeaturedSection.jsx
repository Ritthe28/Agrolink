import React from "react";
import { assets, featuresData, partnersData } from "../assets/assets";

const FeaturedSection = () => {
  return (
    <section className="w-full text-gray-800">
      {/*  OUR SOLUTION */}
      <div className="w-full px-6 md:px-16 lg:px-32 py-20 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            OUR <span className="text-green-600 font-serif">SOLUTION</span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            AgroLink is a smart digital marketplace that connects farmers
            directly with buyers and businesses for a more transparent and
            profitable trading experience.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left Side: Image */}
          <div className="flex justify-center w-full md:w-1/2">
            <img
              src={assets.Solution}
              alt="AgroLink Solution Diagram"
              className="max-w-md w-full"
            />
          </div>

          {/* Right Side: Text */}
          <div className="md:w-1/2 space-y-6">
            <p>
              We drive agricultural transactions through our digital platform in
              combination with our service partnership network. AgroLink
              accommodates online payments between buyer and seller, product
              quality check options, and end-to-end logistic services.
            </p>

            <p className="font-semibold">
              AgroLink does not buy or sell crops and is not a broker. Instead,
              we offer you the ability to effortlessly market your crop via our
              platform.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="px-5 py-2 border border-green-600 text-green-700 rounded hover:bg-green-600 hover:text-white transition">
                Explore the marketplace
              </button>
              <button className="px-5 py-2 border border-green-600 text-green-700 rounded hover:bg-green-600 hover:text-white transition">
                Learn more about us
              </button>
            </div>
          </div>
        </div>
        {/*USER BENEFITS SECTION */}{" "}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-12">
          {" "}
          <ul className="space-y-4 text-gray-700 text-lg md:w-1/2">
            {" "}
            <li className="flex items-start gap-2">
              {" "}
              <span className="text-green-600 text-xl">✔</span>A user-friendly
              platform that generates market opportunity for farmers and
              industry buyers.{" "}
            </li>{" "}
            <li className="flex items-start gap-2">
              {" "}
              <span className="text-green-600 text-xl">✔</span> Unlimited access
              to a global market from anywhere, at anytime.{" "}
            </li>{" "}
            <li className="flex items-start gap-2">
              {" "}
              <span className="text-green-600 text-xl">✔</span> Transparent and
              reliable market information, deal creation and negotiation.{" "}
            </li>{" "}
            <li className="flex items-start gap-2">
              {" "}
              <span className="text-green-600 text-xl">✔</span> Integrated and
              secure platform payment processes.{" "}
            </li>{" "}
            <li className="flex items-start gap-2">
              {" "}
              <span className="text-green-600 text-xl">✔</span> Tailored product
              quality verification and logistic services.{" "}
            </li>{" "}
            <li className="flex items-start gap-2">
              {" "}
              <span className="text-green-600 text-xl">✔</span>A market with
              only verified buyers and sellers.{" "}
            </li>{" "}
            <li className="flex items-start gap-2">
              {" "}
              <span className="text-green-600 text-xl">✔</span> Customer support
              & insight.{" "}
            </li>{" "}
          </ul>{" "}
          {/* Right Side: Embedded Video */}{" "}
          <div className="w-full md:w-1/2 flex justify-center">
            {" "}
            <iframe
              className="rounded-lg shadow-lg w-full md:w-[480px] h-[270px]"
              src="https://www.youtube.com/embed/FAvIa27RcyU"
              title="Agri Marketplace | Platform User Benefits"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>{" "}
          </div>{" "}
        </div>
      </div>

      {/* VALUE PROPOSITION */}
      <div className="w-full px-6 md:px-16 lg:px-32 py-20 bg-white">
        <div className="text-center mb-12 pb-10">
          <h2 className="text-3xl md:text-4xl font-bold pb-6">
            OUR <span className="text-green-600 font-serif">VALUE</span>{" "}
            PROPOSITION
          </h2>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-gray-600 text-lg">
              AgroLink connects farmers and buyers for seamless trade, while our
              reliable partner network ensures smooth logistics, quality
              assurance, and secure payments. Discover our premium partners for
              more details.
            </p>

            <video
              className="rounded-lg shadow-lg w-full h-auto"
              controls
              autoPlay
              muted
              loop
            >
              <source
                src="https://agrimp-prod.s3.amazonaws.com/public/OVP_Video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/*  HOW IT WORKS (Gray Background) */}
      <div className="w-full px-6 md:px-16 lg:px-32 py-20 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-green-600 font-serif">HOW</span> IT WORKS
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Take a look at our{" "}
            <span className="text-green-600">platform demo</span>.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-12">
          {/* Left Column: Text */}
          <div className="md:w-1/2 space-y-4">
            <ul className="list-decimal pl-5 text-gray-700 text-lg space-y-2">
              <li>Sign-up to the platform</li>
              <li>Create your offer or bid</li>
              <li>Set a quantity &amp; price</li>
              <li>Provide crop characteristics &amp; details</li>
              <li>Decide upon your preferred incoterm</li>
              <li>Choose logistic and/or crop quality check services</li>
              <li>Post your seller offer or buyer bid</li>
              <li>Stay updated by email or notification centre</li>
            </ul>
          </div>

          {/* Right Column: Video */}
          <div className="md:w-1/2 flex justify-center">
            <video
              playsInline
              autoPlay
              muted
              loop
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            >
              <source
                src="https://agrimp-prod.s3.amazonaws.com/public/AgriMarketPlace_howitworks_demo.mov"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/*  GET STARTED (White Background) */}
      <div className="w-full px-6 md:px-16 lg:px-32 py-20 bg-white text-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 font-serif mb-6">
            GET STARTED
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We open the door to thousands of approved buyers and sellers. Post
            your crop bid as a registered buyer, or create your crop offer as a
            verified seller. Through our rigorous compliance, we ensure only
            reliable users gain access to our digital marketplace.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12 mt-12">
          {/* Seller Card */}
          <div className="md:w-1/2 max-w-lg text-center space-y-6">
            <h3 className="text-xl font-bold uppercase text-green-700">
              POST OFFER AS A SELLER
            </h3>
            <p className="text-gray-600">
              Post offers for the crops you want to sell and gain immediate
              access to verified buyers. You can also respond to existing buyer
              bids.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="px-6 py-2 border-2 border-green-600 text-green-700 rounded-lg hover:bg-green-600 hover:text-white transition duration-300 shadow-md">
                Register as a seller
              </button>
              <button className="px-6 py-2 border-2 border-green-600 text-green-700 rounded-lg hover:bg-green-600 hover:text-white transition duration-300 shadow-md">
                Selling offer video
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300 my-8"></div>

          {/* Buyer Card */}
          <div className="md:w-1/2 max-w-lg text-center space-y-6">
            <h3 className="text-xl font-bold uppercase text-green-700">
              POST BID AS A BUYER
            </h3>
            <p className="text-gray-600">
              Post bids for the crops you want to buy. Let sellers know what
              you’re looking for and receive quick responses from interested
              farmers.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="px-6 py-2 border-2 border-green-600 text-green-700 rounded-lg hover:bg-green-600 hover:text-white transition duration-300 shadow-md">
                Register as a buyer
              </button>
              <button className="px-6 py-2 border-2 border-green-600 text-green-700 rounded-lg hover:bg-green-600 hover:text-white transition duration-300 shadow-md">
                Buying bid video
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* OUR SERVICES (Gray Background / Last Section) */}
      <div className="w-full px-6 md:px-16 lg:px-32 py-20 bg-gray-100">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            OUR <span className="text-green-600 font-serif">SERVICES</span>
          </h2>

          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-gray-600 text-lg">
              AgroLink provides all of the following services through internal
              operations in combination with our specialised partnership
              network.
            </p>

            <img
              src={assets.Services}
              alt="AgroLink Services"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          {/* --- Section Title --- */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif">
              <span className="text-green-600 font-light">PREMIUM</span>
              <span className="text-gray-800 tracking-widest"> PARTNERS</span>
            </h2>
          </div>

          {/* --- Partners Grid --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
            {partnersData.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center text-center"
              >
                <div className="h-16 flex items-center mb-6">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-12 object-contain"
                  />
                </div>
                <h4 className="font-semibold text-gray-800">{partner.name}</h4>
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mt-2">
                  {partner.category}
                </p>
                <p className="text-sm text-gray-500 mt-1">{partner.type}</p>
              </div>
            ))}
          </div>

          {/* --- "Become a partner" Button --- */}
          <div className="text-center mt-20">
            <a
              href="#"
              className="inline-block border border-green-500 text-green-600 py-3 px-8 transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white"
            >
              Become a partner
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/2 text-center md:text-left max-w-lg md:max-w-xl">
            <h2 className="text-6xl font-light text-gray-700 font-serif mb-8">
              PRICING
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Both buyers and sellers pay a small service fee to AgroLink once a
              transaction is completed. We maintain full transparency in pricing
              and keep you informed at every stage of the process. Our fees are
              determined based on the value and volume of your transaction.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={assets.Pricing}
              alt="Volume and Value"
              className="max-w-xs md:max-w-sm h-auto object-contain"
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-20">
        {" "}
        {/* White background */}
        <div className="container mx-auto px-4">
          {/* --- Section Title --- */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif">
              KEY <span className="text-green-600 font-light">FEATURES</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Discover how AgroLink can benefit you and all other food
              supply chain actors.
            </p>
          </div>

          {/* --- Features Grid --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {featuresData.map((feature, index) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center px-4"
              >
                {/* Green Circle Container for Icon */}
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    className="w-10 h-10 object-contain filter brightness-0 invert" // filter brightness-0 invert makes a black image white
                  />
                </div>
                <h3 className="font-bold text-gray-800 text-lg uppercase mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
