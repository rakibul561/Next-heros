import React from "react";

const page = () => {
  return (
    <div>
      <div className="relative bg-white text-center py-12">
        {/* Content */}
        <h2 className="text-3xl font-semibold text-gray-900">Organic</h2>
        <h3 className="text-xl text-green-600 font-semibold mt-2">
          Fresh & Healthy Vegetables
        </h3>
        <p className="text-gray-600 mt-2">
          Get the fresh and healthy vegetables delivered to your door.
        </p>
        <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
          Shop Now
        </button>

        {/* Torn Paper Effect */}
        <div className="absolute bottom-0 left-0 w-full">
          <img
            src="https://www.svgrepo.com/show/54852/torn-paper.svg"
            alt="Torn Paper Effect"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <img
            src="https://www.svgrepo.com/show/54852/torn-paper.svg"
            alt="Torn Paper Effect"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <img
            src="https://www.svgrepo.com/show/54852/torn-paper.svg"
            alt="Torn Paper Effect"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <img
            src="https://www.svgrepo.com/show/54852/torn-paper.svg"
            alt="Torn Paper Effect"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <img
            src="https://www.svgrepo.com/show/54852/torn-paper.svg"
            alt="Torn Paper Effect"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <img
            src="https://www.svgrepo.com/show/54852/torn-paper.svg"
            alt="Torn Paper Effect"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
