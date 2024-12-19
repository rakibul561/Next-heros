import React from "react";

const Cetagorypage = () => {
  return (
    <div className="min-w-7xl border-b-green-600 border border-r-0 border-l-0 border-t-0 text-2xl">
      <header className="flex justify-between items-center px-8 py-4 ">
        <div className="text-3xl font-bold text-green-500">R</div>
        <nav className="space-x-4">
          <a
            href="#about"
            className="px-4 py-1 rounded text-white bg-transparent hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            About
          </a>
          <a
            href="#about"
            className="px-4 py-1 rounded text-white bg-transparent hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            Skills
          </a>
          <a
            href="#about"
            className="px-4 py-1 rounded text-white bg-transparent hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            Portfolios
          </a>
          <a
            href="#about"
            className="px-4 py-1 rounded text-white bg-transparent hover:bg-green-500 hover:text-white transition-all duration-300"
          >
             Contact
          </a>
          <a
            href="#about"
            className="px-4 py-1 rounded text-white bg-transparent hover:bg-green-500 hover:text-white transition-all duration-300"
          >
             Resume
          </a>

        </nav>
      </header>
    </div>
  );
};

export default Cetagorypage;
