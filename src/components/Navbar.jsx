import { Home } from "react-feather";

const Navbar = () => (
  <nav className="bg-white shadow-sm sticky top-0 z-50">
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex items-center h-16">
        <a
          href="/"
          className=" text-gray-800 hover:text-blue-600 font-medium flex items-center"
        >
          <Home className="mr-2" />
          Home
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
