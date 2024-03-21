import { useNavigate } from "react-router-dom";
import HowItWorks from "../HowItWorks/HowItWorks";
import IntroducingAI from "../IntroducingAI/IntroducingAI";

const HeroSection = () => {
  let navigate = useNavigate();
  return (
    <div>
      <section
        className="pt-8 lg:pt-32 pb-20"
        style={{
          backgroundImage: `url("/bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-6xl font-bold">Simplify Assignment Creation</h1>
          <h1 className="text-6xl mt-5 font-bold">
            With <span className="text-indigo-600">Scholarly</span>
          </h1>
          <p className="mt-10 text-center text-2xl font-normal leading-7 text-gray-600 mb-9">
            Tailored specifically for DIU students, streamline your assignments{" "}
            <br />
            and unleash your creativity with ease
          </p>

          <button
            onClick={() => navigate("/create/cover-page")}
            className="shadow-2xl my-10 overflow-hidden relative w-80 h-20 p-4 bg-yellow-600 text-black border-none rounded-md text-2xl font-bold cursor-pointer z-10 group"
          >
            {`Let's Create`}
            <span className="absolute w-96 h-96 -top-24 -left-8 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-96 h-96 -top-24 -left-8 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-96 h-96 -top-24 -left-8 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className="text-center text-white group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-6 left-[6rem] z-10">
              Assignment
            </span>
          </button>

          <div className="flex justify-center mt-10">
            <img src="/hero_image2.png" className="rounded-lg" />
          </div>
        </div>

        <HowItWorks />

        <IntroducingAI />
      </section>
    </div>
  );
};

export default HeroSection;
