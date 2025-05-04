import React from "react";

const Header = () => {
  return (
    <nav className="bg-[#FFF7E2] py-4">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <h1 className="text-[#3A643B] font-medium text-xl tracking-wider">
          AMRUTAM
        </h1>

        <div className="hidden md:flex flex-row items-center gap-8">
          <p className="text-sm text-[#474747] hover:font-bold hover:text-[#3A643B] cursor-pointer">
            Home
          </p>
          <p className="text-sm text-[#474747] hover:font-bold hover:text-[#3A643B] cursor-pointer">
            Find Doctors
          </p>
          <p className="text-sm text-[#474747] hover:font-bold hover:text-[#3A643B] cursor-pointer">
            About Us
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="border border-[#3A643B] text-[#3A643B] w-24 py-2 px-4 rounded-md hover:bg-[#f0e8d0] transition-colors">
            Login
          </button>
          <button className="bg-[#3A643B] text-white w-24 py-2 px-4 rounded-md hover:bg-[#2a4b2b] transition-colors">
            Sign-up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
