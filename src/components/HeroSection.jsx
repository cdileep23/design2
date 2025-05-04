import React, { useState } from "react";
import { MapPin, ChevronDown, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [location, setLocation] = useState("");
 
  return (
    <div className="w-full py-12 px-6 bg-[#EAF2EA] flex justify-center items-center relative">
    
    

      <div className="max-w-6xl w-full flex flex-col items-center justify-center">
        <h1 className="font-semibold text-3xl md:text-4xl text-black mb-8 text-center">
          Find Expert Doctors For An In-Clinic Session Here
        </h1>

        <div className="flex flex-col md:flex-row gap-3 w-full max-w-2xl">
     
          <div className="relative w-full md:w-2/5">
            <div className="flex items-center bg-white rounded-lg pr-2 pl-3 py-3 shadow-sm">
              <MapPin className="text-[#3A643B] w-5 h-5 mr-2" />
              <select
                className="flex-1 appearance-none bg-transparent outline-none text-gray-600 text-sm cursor-pointer"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
                <option value="houston">Houston</option>
                <option value="phoenix">Phoenix</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

       
          <div className="relative w-full md:w-3/5">
            <div className="flex items-center bg-white rounded-lg pr-2 pl-3 py-3 shadow-sm">
              <input
                type="text"
                placeholder="eg. Doctor, specialisation, clinic name"
                className="flex-1 outline-none text-sm text-gray-600"
              
                
              />
              <button
                className="bg-white rounded"
              
              >
                <ArrowRight className="w-4 h-4 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
