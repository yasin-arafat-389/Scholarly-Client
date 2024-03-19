import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  let navigate = useNavigate();
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <img
              onClick={() => navigate("/")}
              src="/scholarly.png"
              className="w-[200px] cursor-pointer"
            />
          </div>

          <div className="mt-4 flex gap-2 justify-center items-center text-center text-lg text-gray-600 lg:mt-0 lg:text-right">
            Made with <FaHeart className="text-red-700" /> by{" "}
            <a
              href="https://yasin-arafat-389.github.io/portfolio"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 hover:underline cursor-pointer"
            >
              Yasin Arafat
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
