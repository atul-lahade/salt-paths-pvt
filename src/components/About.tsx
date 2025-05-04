import aboutImg from "../assets/img/about/about-us.jpg";
import certifiedImg from "../assets/img/about/certified.png";
import commitmentImg from "../assets/img/about/commitment.png";
import innovationImg from "../assets/img/about/innovation.png";
import missionImg from "../assets/img/about/mission.png";
import qualityImg from "../assets/img/about/quality.png";
import reliabilityImg from "../assets/img/about/reliability.png";
import sustainabilityImg from "../assets/img/about/sustainability.png";
import valuesImg from "../assets/img/about/values.png";
import valuesbg from "../assets/img/about/values-bg.jpg";
import visionImg from "../assets/img/about/vision.png";
import whatWeDoImg from "../assets/img/about/what-we-do.png";
import whoWeAreImg from "../assets/img/about/who-we-are.png";

export default function About() {
  return (
    <div className="font-poppins">
      <section className="py-12 px-10 relative">
        <div className="w-full max-w-7xl p-4 md:p-5 lg:p-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-2 flex">
                <h2 className="text-[#3b65a8] text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  From Our Land to Your Hands – The Journey of Trust
                </h2>
                <p className="text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                  At SaltPath, we believe every product tells a story — from
                  Indian tradition to global admiration. We're dedicated to
                  connecting cultures by delivering high-quality, ethically
                  sourced products from India to the world. Rooted in trust and
                  excellence, we ensure seamless logistics, sustainable
                  practices, and authentic partnerships. Whether you're a
                  retailer, wholesaler, or distributor — SaltPath is your
                  trusted bridge to Indian craftsmanship and culture.
                </p>
              </div>
              <a
                href="/contact"
                className="px-6 py-3 bg-[#6a838f] hover:bg-[#3a5662] text-white font-medium rounded-lg shadow-md transition duration-300"
              >
                Get Started
              </a>
            </div>
            <img
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover drop-shadow-[0_10px_20px_rgba(121,154,163,0.5)] transition-transform duration-300 transform hover:scale-110"
              src={aboutImg}
              alt="about Us image"
            />
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="w-full max-w-7xl p-4 md:p-5 lg:p-5 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 px-8">
            <div className="flex flex-row items-center lg:items-start gap-4">
              <img
                className="w-28 h-28 rounded-3xl group-hover:scale-105 transition duration-300 ease-in-out"
                src={missionImg}
                alt="Mission image"
              />
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-[#3b65a8] mb-3">
                  OUR MISSION
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  To connect businesses across continents, ensuring that every
                  product exported or imported meets the highest industry
                  standards.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center lg:items-start gap-4">
              <img
                className="w-28 h-28 rounded-3xl group-hover:scale-105 transition duration-300 ease-in-out"
                src={visionImg}
                alt="Vision image"
              />
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-[#3b65a8] mb-3">
                  OUR VISION
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  To be a leading global trade partner, seamlessly connecting
                  local producers with international markets through innovation,
                  reliability, and sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${valuesbg})` }}
      >
        <div className="container mx-auto p-6 md:p-12 mt-6">
          <div className="text-center pt-6 mb-12">
            <img
              className="mx-auto w-16 h-16 md:w-20 md:h-20"
              src={valuesImg}
              alt="Leaf-heading"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b65a8]">
              Values
            </h2>
            <div className="mt-2 flex justify-center">
              <hr
                aria-hidden="true"
                role="separator"
                className="border-t-2 border-gray-300 w-16 md:w-20"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
              <img
                className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14"
                src={qualityImg}
                alt="Quality assurance"
              />
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#3b65a8]">
                Best Quality Services
              </h4>
              <p className="text-gray-500 text-sm md:text-base">
                <strong>
                  <em>
                    "Excellence in Every Grain"
                    <br />
                  </em>
                </strong>
                We ensure top-notch quality, freshness, and authenticity in
                every product.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
              <img
                className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14"
                src={reliabilityImg}
                alt="Reliability"
              />
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#3b65a8]">
                Vast Experience in Food Trading
              </h4>
              <p className="text-gray-500 text-sm md:text-base">
                <strong>
                  <em>
                    "Global Expertise, Seamless Trade"
                    <br />
                  </em>
                </strong>
                Decades of experience in sourcing and exporting premium food
                products.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
              <img
                className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14"
                src={certifiedImg}
                alt="Certified Services"
              />
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#3b65a8]">
                Trusted & Legally Approved Certified Services
              </h4>
              <p className="text-gray-500 text-sm md:text-base">
                <strong>
                  <em>
                    "Certified Quality, Transparent Practices"
                    <br />
                  </em>
                </strong>
                Fully compliant with international food safety and trade
                regulations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
              <img
                className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14"
                src={commitmentImg}
                alt="Commitment"
              />
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#3b65a8]">
                Commitment & Time Adherence
              </h4>
              <p className="text-gray-500 text-sm md:text-base">
                <strong>
                  <em>
                    "Freshness Delivered On Time"
                    <br />
                  </em>
                </strong>
                Reliable logistics ensure timely and efficient global shipments.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
              <img
                className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14"
                src={innovationImg}
                alt="Innovation"
              />
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#3b65a8]">
                Innovation in Food & Trade
              </h4>
              <p className="text-gray-500 text-sm md:text-base">
                <strong>
                  <em>
                    "Modern Solutions, Timeless Flavors"
                    <br />
                  </em>
                </strong>
                Cutting-edge processing, packaging, and sustainable trade
                practices.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
              <img
                className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14"
                src={sustainabilityImg}
                alt="Sustainability"
              />
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#3b65a8]">
                Sustainability & Ethical Sourcing
              </h4>
              <p className="text-gray-500 text-sm md:text-base">
                <strong>
                  <em>
                    "Responsible Sourcing, Better Future"
                    <br />
                  </em>
                </strong>
                Supporting farmers and eco-friendly practices for a sustainable
                food trade.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-cover bg-center text-lg leading-relaxed text-body-color bg-opacity-50">
        <section className="flex flex-col p-6">
          <div className="container mx-auto">
            <div className="text-center pt-6 mb-12">
              <img
                className="mx-auto w-20 h-20"
                src={whoWeAreImg}
                alt="Leaf-heading"
              />
              <h2 className="text-4xl font-bold text-[#3b65a8]">Who We Are?</h2>
              <div className="mt-2 flex justify-center">
                <hr
                  aria-hidden="true"
                  role="separator"
                  className="border-t-2 border-gray-300 w-[60px]"
                />
              </div>
            </div>
          </div>
          <div className="flex  px-8 md:px-12 lg:px-16">
            <p className="text-justify text-black">
              At SaltPath, we are storytellers of Indian heritage — driven by a
              passion to connect cultures through exceptional products. Founded
              on trust, quality, and authenticity, we are committed to
              showcasing India’s rich craftsmanship on the global stage.
            </p>
          </div>
        </section>
        <section className="p-6">
          <div className="container mx-auto">
            <div className="text-center pt-6 mb-12">
              <img
                className="mx-auto w-20 h-20"
                src={whatWeDoImg}
                alt="Leaf-heading"
              />
              <h2 className="text-4xl font-bold text-[#3b65a8]">What We Do?</h2>
              <div className="mt-2 flex justify-center">
                <hr
                  aria-hidden="true"
                  role="separator"
                  className="border-t-2 border-gray-300 w-[60px]"
                />
              </div>
            </div>
          </div>
          <div className="flex px-8 md:px-12 lg:px-16">
            <p className="text-justify text-black">
              We export premium, ethically sourced products from India to the
              world. With a strong focus on sustainable practices and seamless
              logistics, we partner with retailers, wholesalers, and
              distributors to deliver goods that reflect both tradition and
              excellence. SaltPath is more than an export house — we’re a bridge
              between cultures, turning every shipment into a symbol of Indian
              pride.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
