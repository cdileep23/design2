import React, { useState } from "react";
import { X, ChevronDown } from "lucide-react";

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    expertise: ["Hair care"],
    gender: ["Female"],
    fees: ["Rs.0-Rs.500"],
    languages: ["Hindi"],
  });

  const [openDropdown, setOpenDropdown] = useState(null);

  const filterCategories = [
    {
      name: "Expertise",
      key: "expertise",
      options: ["Hair care", "Skin care", "Makeup", "Nutrition", "Fitness"],
    },
    {
      name: "Gender",
      key: "gender",
      options: ["Female", "Male", "Non-binary"],
    },
    {
      name: "Fees",
      key: "fees",
      options: [
        "Rs.0-Rs.500",
        "Rs.501-Rs.1000",
        "Rs.1001-Rs.1500",
        "Rs.1501-Rs.2000",
        "Rs.2000+",
      ],
    },
    {
      name: "Languages",
      key: "languages",
      options: [
        "Hindi",
        "English",
        "Tamil",
        "Telugu",
        "Marathi",
        "Bengali",
        "Kannada",
      ],
    },
  ];

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const selectFilter = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: [value], 
    }));
    setOpenDropdown(null); 
  };

  const removeFilter = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item !== value),
    }));
  };

 

  const allSelectedFilters = Object.entries(selectedFilters).flatMap(
    ([category, values]) => values.map((value) => ({ category, value }))
  );

  return (
    <div className="w-full flex justify-center bg-gray-50">
      <div className="max-w-6xl w-full p-6">
        <div className="flex justify-between gap-2 mb-8">
          {filterCategories.map((category) => (
            <div key={category.key} className="relative">
              <button
                onClick={() => toggleDropdown(category.key)}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md flex items-center gap-2"
              >
                {category.name}
                <ChevronDown size={16} />
              </button>

              {openDropdown === category.key && (
                <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                  <ul className="py-1">
                    {category.options.map((option) => (
                      <li
                        key={option}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => selectFilter(category.key, option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          <button className="bg-green-50 text-green-700 px-4 py-2 rounded-md flex items-center gap-2">
            All filters
            <ChevronDown size={16} />
          </button>
        </div>

        {allSelectedFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-end mt-4">
            {allSelectedFilters.map(({ category, value }) => (
              <div
                key={`${category}-${value}`}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center gap-1"
              >
                {value}
                <button
                  onClick={() => removeFilter(category, value)}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
