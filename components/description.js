import React, { useState, memo } from "react";
import Moment from "react-moment";

import { formatDepartments } from "../utils";

const Description = memo(
  ({
    title,
    city,
    salary_range,
    job_type,
    department,
    hours,
    summary,
    created,
  }) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen((open) => !open);

    return (
      <div>
        <button
          onClick={handleClick}
          aria-label="description"
          className="focus:outline-none flex lg:flex-row flex-col justify-between lg:items-center w-full py-4 px-1 border-t border-gray-200"
        >
          <div className="flex items-start text-left flex-col">
            <span className="font-bold">{title}</span>
            <span>{`${job_type} | $${salary_range[0]} - $${salary_range[1]} an hour | ${city}`}</span>
          </div>
          <span>
            <Moment fromNow>{created}</Moment>
          </span>
        </button>
        {open && (
          <div
            className="flex flex-col lg:flex-row w-full lg:items-center"
            style={{ visibility: open ? "visible" : "hidden" }}
          >
            <div className="flex flex-1 flex-col p-1">
              <div className="flex flex-col lg:flex-row mb-2">
                <span className="font-bold w-48">Department:</span>
                <p className="break-words w-64">
                  {formatDepartments(department)}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row mb-2">
                <span className="font-bold w-48">Hours / shift:</span>
                <p className="break-words w-64">{`${hours[0]} hours / shift`}</p>
              </div>
              <div className="flex flex-col lg:flex-row ">
                <span className="font-bold w-48">Summary:</span>
                <p className="break-words w-64">{summary}</p>
              </div>
            </div>
            <div className="flex lg:w-48 lg:flex-col lg:items-end">
              <button
                className="focus:outline-none bg-blue-500 text-white rounded-lg px-5 py-2 m-1"
                aria-label="detail"
              >
                Job details
              </button>
              <button
                className="focus:outline-none border border-blue-500 text-blue-500 rounded-lg px-5 py-2 m-1"
                aria-label="save"
              >
                Save job
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default Description;
