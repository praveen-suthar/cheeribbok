import Logo from "../assets/cheeribook_logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contextApi/context";
import { useContext } from "react";
import menuIcon from "../assets/icon/menu.svg";
import closeIcon from "../assets/icon/close.svg";

const Header = () => {
  const { logOut } = useContext(UserContext);

  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <header className="bg-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img src={Logo} alt="logo" width={65} height={38} />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="#"
            className="text-[#484848] font-Newsreader text-lg hover:text-gray-600"
          >
            ABOUT
          </Link>
          <Link
            to="/#"
            className="text-[#484848] font-Newsreader text-lg hover:text-gray-600"
          >
            PHOTOBOOK
          </Link>
          <Link
            to="/#"
            className="text-[#484848] font-Newsreader text-lg hover:text-gray-600"
          >
            RETOUCHING
          </Link>
          <Link
            to="#"
            className="text-[#484848] font-Newsreader text-lg hover:text-gray-600"
          >
            FAQ
          </Link>
          <Link
            to="#"
            className="text-[#484848] font-Newsreader text-lg hover:text-gray-600"
          >
            CONTACT US
          </Link>
        </nav>
        <button
          onClick={handleLogOut}
          className="bg-[#3399aa] text-white font-Newsreader text-sm md:text-lg py-2 px-3 md:px-4 rounded-md hover:bg-[#43c3da] transition-all duration-300"
        >
          LogOut
        </button>
      </div>
    </header>
  );
};

export default Header;
