import { Link } from 'react-router-dom';
import Logo from '../assets/cheeribook_logo.svg'

const Footer = () => {
  return (
    <footer className="py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src={Logo}
              alt="Cheeribook Logo"
              width={170}
            />
          </div>

          {/* Navigation Links currently not working */}
          <div className="flex space-x-6 text-gray-600">
            <Link to="#" className="hover:underline">About</Link>
            <Link to="#" className="hover:underline">Photobook</Link>
            <Link to="#" className="hover:underline">Image Retouching</Link>
            <Link href="#" className="hover:underline">Contact Us</Link>
          </div>
        </div>

        {/* Divider line */}
        <hr className="border-gray-300" />

        <div className="flex flex-col md:flex-row items-center justify-between mt-4 text-gray-600 text-sm">
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
            <span>Copyright Cheeribook, 2023</span>
            <span>Support Email: <a href="mailto:hello@cheeribook.com" className="hover:underline">hello@cheeribook.com</a></span>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Terms And Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
