import React, { useState } from "react";
import { formatNumber } from "../utils";

const FilterListItem = ({ title, count, onClick, className }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <li className="my-2">
      <button
        className={`${className || "focus:outline-none text-left"}`}
        aria-label="filter"
        onClick={() => {
          onClick();
          setClicked(!clicked);
        }}
      >
        <span className={`mr-2 ${clicked && "font-medium"}`}>{title}</span>
        <span className="text-gray-400">{formatNumber(count)}</span>
      </button>
    </li>
  );
};

export default FilterListItem;
