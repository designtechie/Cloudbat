import  { useState, useEffect, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 p-6">
  <div className="container mx-auto">
    <div className="flex justify-between items-center">
      <div className="text-white font-bold text-xl">Logo</div>
      <div className="space-x-8">
        <a href="#Home" className="text-white hover:text-gray-300">Home</a>
        <a href="#AboutUs" className="text-white hover:text-gray-300">About Us</a>
        <div className="relative inline-block" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex text-white focus:outline-none"
          >
            Services
            <FiChevronDown className="w-4 h-4 ml-2 mt-1.5" />
          </button>
          {showDropdown && (
            <div className="absolute z-10 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
              <a
                href="#Salesforce"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
              >
                Salesforce
              </a>
              <a
                href="#DigitalMarketing"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Digital Marketing
              </a>
            </div>
          )}
        </div>
        <a href="#Products" className="text-white hover:text-gray-300">Products</a>
        <a href="#blogs" className="text-white hover:text-gray-300">Blogs</a>
        <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
