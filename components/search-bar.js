import React, { useCallback, useContext, useState } from "react";
import { debounce } from "lodash";

import { FilterContext } from "./context";

const SearchBar = () => {
  const [text, setText] = useState("");
  const { filterBySearch } = useContext(FilterContext);

  const filter = useCallback(
    debounce((value) => {
      filterBySearch({
        search: encodeURIComponent(value.toLowerCase()),
      });
    }, 500),
    []
  );

  const handleSearch = (event) => {
    setText(event.target.value);
    filter(event.target.value);
  };

  return (
    <div className="flex lg:m-5 bg-white h-12 px-6 items-center border-t lg:border border-gray-200">
      <div className="w-4 h-4 mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.97 56.97">
          <path d="M55.15 51.89l-13.56-14.1A22.93 22.93 0 0046.99 23c0-12.68-10.32-23-23-23s-23 10.32-23 23 10.31 23 23 23c4.76 0 9.3-1.44 13.17-4.16l13.66 14.2a2.98 2.98 0 004.24.09 3 3 0 00.09-4.24zM23.98 6c9.38 0 17 7.63 17 17s-7.62 17-17 17-17-7.63-17-17 7.63-17 17-17z" />
        </svg>
      </div>
      <form className="w-full">
        <input
          className=" w-full h-full focus:outline-none font-light text-sm"
          type="text"
          value={text}
          placeholder="Search for any job, title, keywords or company"
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};

export default SearchBar;
