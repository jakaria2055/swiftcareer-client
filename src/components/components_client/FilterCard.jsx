import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Technology",
    array: [
      "MERN",
      "Python",
      "NodeJs",
      "ReactJS",
      "ReactNative",
      "UI-UX",
      "Java",
      "C++",
      "GOLang",
      "Ruby & Rail",
      "Dart",
      "Flutter",
      "NextJS",
    ],
  },
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
    filterType: "Experience",
    array: ["0-3 years", "3-5 years", "5-7 years", "7+ years"],
  },
  {
    filterType: "Salary",
    array: ["0-20k", "20-50k", "50-80k", "80-100k", "100k+"],
  },
];

const FilterCard = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm sticky top-5">
      <h1 className="text-xl font-bold text-gray-900 mb-4">Filter Jobs</h1>
      <hr className="mb-6 border-gray-300" />

      <RadioGroup
        value={selectedValue}
        onValueChange={handleChange}
        className="space-y-4"
      >
        {filterData.map((data, index) => (
          <div key={index} className="space-y-1">
            <h2 className="font-semibold text-gray-800 text-lg">
              {data.filterType}
            </h2>

            {data.array.map((item, itemIndex) => {
              const itemId = `${data.filterType}-${itemIndex}`;
              return (
                <div key={itemIndex} className="flex items-center space-x-1">
                  <RadioGroupItem value={item} id={itemId} />
                  <Label
                    htmlFor={itemId}
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {item}
                  </Label>
                </div>
              );
            })}

            {index < filterData.length - 1 && (
              <hr className="border-gray-200" />
            )}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
