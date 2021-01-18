import React, { memo, useContext } from "react";
import { throttle } from "lodash";

import { FilterContext } from "./context";
import FilterListItem from "./filter-list-item";
import { DELAY_TIME } from "../utils/constants";

const SideBar = memo(() => {
  const {
    filters,
    filterByJobType,
    filterByDepartment,
    modalToggle,
    handleToggle,
    filterBySchedule,
    filterByExperience,
  } = useContext(FilterContext);

  return (
    <div className="hidden lg:flex flex-col w-64 mr-5">
      <div className="w-full mb-5 bg-white border border-gray-200 p-3 text-xs">
        <span className="font-medium">JOB TYPE</span>
        <ul className="mt-2">
          {filters &&
            filters.job_type.map(({ key, doc_count }) => (
              <FilterListItem
                key={key}
                title={key}
                count={doc_count}
                onClick={throttle(
                  () =>
                    filterByJobType({
                      filter: `job_type: ${encodeURIComponent(key)}`,
                    }),
                  DELAY_TIME
                )}
              />
            ))}
        </ul>
      </div>
      <div className="w-full mb-5 bg-white border border-gray-200 p-3 text-xs">
        <span className="font-medium">DEPARTMENT</span>
        <ul className="mt-2">
          {filters &&
            filters.department.slice(0, 9).map(({ key, doc_count }) => (
              <FilterListItem
                key={key}
                title={key}
                count={doc_count}
                onClick={throttle(
                  () =>
                    filterByDepartment({
                      filter: `department: ${encodeURIComponent(key)}`,
                    }),
                  DELAY_TIME
                )}
              />
            ))}
          <li className="mt-2">
            <button
              className="border-b border-transparent hover:border-blue-500 text-blue-500 focus:outline-none"
              onClick={() => handleToggle(!modalToggle)}
              aria-label="button"
            >
              Show more
            </button>
          </li>
        </ul>
      </div>
      <div className="w-full mb-5 bg-white border border-gray-200 p-3 text-xs">
        <span className="font-medium">WORK SCHEDULE</span>
        <ul className="mt-2">
          {filters &&
            filters.work_schedule.map(({ key, doc_count }) => (
              <FilterListItem
                key={key}
                title={key}
                count={doc_count}
                onClick={throttle(
                  () =>
                    filterBySchedule({
                      filter: `work_schedule: ${encodeURIComponent(key)}`,
                    }),
                  DELAY_TIME
                )}
              />
            ))}
        </ul>
      </div>
      <div className="w-full mb-5 bg-white border border-gray-200 p-3 text-xs">
        <span className="font-medium">EXPERIENCE</span>
        <ul className="mt-2">
          {filters &&
            filters.experience.map(({ key, doc_count }) => (
              <FilterListItem
                key={key}
                title={key}
                count={doc_count}
                onClick={throttle(
                  () =>
                    filterByExperience({
                      filter: `experience: ${encodeURIComponent(key)}`,
                    }),
                  DELAY_TIME
                )}
              />
            ))}
        </ul>
      </div>
    </div>
  );
});

export default SideBar;
