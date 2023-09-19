import { AiFillLinkedin } from 'react-icons/ai';
import { FaSalesforce } from 'react-icons/fa';
import logo from '../assets/CloudBat_Logo_S.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Company Logo" className="w-24 h-20 mr-4" />
            <div>
              <p className="font-bold text-xl mb-1">Cloudbat Technologies Ltd</p>
              <p>Email: info@company.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <h3 className="text-lg font-bold mb-2 md:mb-0 md:mr-4">Subscribe</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-l p-2 w-32 focus:outline-none"
              />
              <button className="bg-blue-500 text-white p-2 rounded-r">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="flex mb-8"> {/* Added flex container */}
          <div className="w-full md:w-1/2 pr-4"> {/* Adjusted width and added right padding */}
            <h3 className="text-xl font-bold mb-4">Content</h3>
            <ul className="list-disc pl-4">
              <li>Calendar of festivities</li>
              <li>New assets</li>
              <li>The most popular content</li>
              <li>Search trends</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2"> {/* Adjusted width */}
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <ul className="list-disc pl-4">
              <li>Pricing</li>
              <li>About us</li>
              <li>Press room</li>
              <li>API</li>
              <li>Jobs</li>
              <li>Sell your content</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2"> {/* Adjusted width */}
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="list-disc pl-4">
              <li>FAQ</li>
              <li>About us</li>
              <li>Press room</li>
              <li>API</li>
              <li>Jobs</li>
              <li>Sell your content</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div>
            <p>&copy; 2023 Cloudbat Technologies Ltd</p>
          </div>
          <div className="relative">
            <select
              className="bg-gray-200 border rounded px-3 py-1 text-gray-800 focus:outline-none"
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          <FaSalesforce className="w-8 h-8 mr-4" />
          <AiFillLinkedin className="w-8 h-8" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
