import { FaCheckCircle } from "react-icons/fa";

const IntroducingAI = () => {
  return (
    <div>
      <section className="mx-auto mt-10 flex max-w-xl flex-col rounded-3xl border-blue-300 px-4 pt-10 pb-24 text-gray-700 sm:border-8 sm:px-10 lg:max-w-screen-lg lg:flex-row">
        <div className="mr-2">
          <h2 className="mb-4 text-4xl font-medium">
            Introducing <span className="text-indigo-600">AI ChatBot</span>
          </h2>
          <p className="mb-10 w-[80%]">
            Empower your assignment journey with our AI Chatbot companion,
            simplifying your tasks and enhancing productivity.
          </p>
          <div className="mb-4 space-y-4">
            <div className="flex space-x-2">
              <FaCheckCircle className="text-2xl text-green-600" />
              <span className="font-medium">
                Seek assistance on assignment-related queries instantly.
              </span>
            </div>

            <div className="flex space-x-2">
              <FaCheckCircle className="text-2xl text-green-600" />
              <span className="font-medium">
                Explore assignment formatting guidelines effortlessly.
              </span>
            </div>

            <div className="flex space-x-2">
              <FaCheckCircle className="text-2xl text-green-600" />
              <span className="font-medium">
                Get suggestions for credible research sources and references.
              </span>
            </div>

            <div className="flex space-x-2">
              <FaCheckCircle className="text-2xl text-green-600" />
              <span className="font-medium">
                Engage in interactive discussions on assignment topics and
                concepts.
              </span>
            </div>

            <div className="flex space-x-2">
              <FaCheckCircle className="text-2xl text-green-600" />
              <span className="font-medium">
                Receive tips on structuring and organizing your assignments
                effectively.
              </span>
            </div>
          </div>
          <span className="mt-5 font-semibold">And so much more......</span>
        </div>
        <div className="h-96">
          <img className="rounded-lg" src="/chatAI.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default IntroducingAI;
