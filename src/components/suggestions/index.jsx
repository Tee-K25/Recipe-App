import React from "react";

const Suggestions = ({ data, handleClick }) => {
  return (
    <div className="flex justify-center px-4 py-2 max-h-36 overflow-y-scroll  bg-white border-2 rounded-lg">
      <ul className="text-center">
        {data && data.length > 0
          ? data.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={handleClick}
                  className="cursor-pointer"
                >
                  {item}
                </li>
              );
            })
          : ""}
      </ul>
    </div>
  );
};

export default Suggestions;
