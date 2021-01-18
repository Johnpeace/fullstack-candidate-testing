import React, { memo, useContext } from "react";
import { throttle } from "lodash";

import { formatNumber } from "../utils";
import { FilterContext } from "./context";
import { DELAY_TIME } from "../utils/constants";

const Modal = memo(() => {
  const { modalToggle, handleToggle, filters, filterByDepartment } = useContext(
    FilterContext
  );

  return (
    <div
      className="absolute flex h-full w-full bg-black bg-opacity-25"
      style={{ visibility: modalToggle ? "visible" : "hidden" }}
    >
      <div className="fixed flex h-screen w-full justify-center items-center">
        <div className="flex flex-col w-3/4 bg-white rounded shadow-xl">
          <div className="flex justify-between items-center p-4">
            <span className="text-xl font-medium">Department</span>
            <button
              className="w-3 h-4 focus:outline-none"
              aria-label="department"
              onClick={() => handleToggle(!modalToggle)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 357">
                <path d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z" />
              </svg>
            </button>
          </div>
          <div className="border-b border-gray-200" />
          <div className="flex flex-wrap justify-between p-4 text-xs">
            {filters &&
              filters.department.map((dept) => (
                <a
                  key={dept.key}
                  className="w-1/4 break-words m-2"
                  href="#job"
                  onClick={throttle(
                    () =>
                      filterByDepartment({
                        filter: `department: ${encodeURIComponent(dept.key)}`,
                      }),
                    DELAY_TIME
                  )}
                >
                  <span className="mr-2">{dept.key}</span>
                  <span className="text-gray-400">
                    {formatNumber(dept.doc_count)}
                  </span>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Modal;
