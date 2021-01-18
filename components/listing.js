import React, { useState, memo } from "react";
import { formatInitials } from "../utils";
import Description from "./description";

const Listing = memo(({ positions, name, list }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {positions ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col m-2 focus:outline-none"
          aria-label="listing"
        >
          <div className="flex items-center">
            <div className="flex uppercase rounded-lg justify-center items-center bg-gray-400">
              <span className="w-8 h-8 text-white text-lg font-medium flex items-center justify-center">
                {formatInitials(name)}
              </span>
            </div>

            <span className="ml-3 text-left break-words">
              {positions} jobs for {name}
            </span>
          </div>
        </button>
      ) : null}
      {isOpen && (
        <div className="flex flex-col w-full">
          {list.map((listing, index) => (
            <Description
              key={index}
              title={listing.job_title}
              job_type={listing.job_type}
              salary_range={listing.salary_range}
              city={listing.city}
              summary={listing.description}
              department={listing.department}
              hours={listing.hours}
              created={listing.created}
            />
          ))}
        </div>
      )}
    </div>
  );
});

export default Listing;
