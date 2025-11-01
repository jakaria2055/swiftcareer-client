import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Mirpur",
      "Dhanmondi",
      "Savar",
      "Mohammadpur",
      "Mohakhali",
      "Mirpur DOHS",
      "Badda",
      "bashundra",
      "uttara",
      "Shyamoli",
      "Kuril",
      "Khilkhet",
      "Motijil",
      "kawran bazar",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "IT",
      "Finance",
      "Marketing",
      "Healthcare",
      "Education",
      "manufacturing",
      "HR",
      "Assistance",
      "Helper",
      "Security",
    ],
  },
  {
    filterType: "Experience",
    array: ["0-3 years", "3-5 years", "5-7 years", "7+ years"],
  },
  {
    filterType: "Salary",
    array: ["0-20k", "20-50k", "50-80k", "80-100k", "100k+"],
  },
];

const FilterCard = () => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm sticky top-5">
      <h1 className="text-xl font-bold text-gray-900 mb-4">Filter Jobs</h1>
      <hr className="mb-6 border-gray-300" />

      <div className="space-y-2">
        {filterData.map((data, index) => (
          <div key={index} className="space-y-0.5">
            <h2 className="font-semibold text-gray-800 text-lg">{data.filterType}</h2>
            <RadioGroup className="space-y-1">
              {data.array.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center space-x-1">
                  <RadioGroupItem value={item} id={`${data.filterType}-${itemIndex}`} />
                  <Label 
                    htmlFor={`${data.filterType}-${itemIndex}`} 
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {item}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {index < filterData.length - 1 && <hr className="border-gray-200" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCard;