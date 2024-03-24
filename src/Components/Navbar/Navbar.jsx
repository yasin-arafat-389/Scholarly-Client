import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  return (
    <div className="bg-gray-700">
      <nav className="w-[90%] mx-auto p-4 flex justify-between items-center">
        <Link to={"/"}>
          <img src="/scholarly.png" className="w-[150px]" />
        </Link>

        <ul className="flex gap-9">
          <li>
            <NavLink
              to={"/"}
              className={`text-white font-bold ${
                location.pathname === "/"
                  ? ""
                  : "hover:bg-gray-500 p-3 rounded-lg transition-colors duration-600"
              }`}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/create/cover-page"}
              className={`text-white font-bold ${
                location.pathname === "/create/cover-page"
                  ? ""
                  : "hover:bg-gray-500 p-3 rounded-lg transition-colors duration-600"
              }`}
            >
              Create Assignment
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
