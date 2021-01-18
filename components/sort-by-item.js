import React, { useState, useContext } from "react";
import { formatNumber, getJobsAmount } from "../utils";
import SortBy from "./sort-by";
import { FilterContext } from "./context";

const SortByItem = () => {
  const {
    jobs,
    sortByLocation,
    sortByRole,
    sortByDepartment,
    sortByEducation,
    sortByExperience,
  } = useContext(FilterContext);
  const [sort, setSort] = useState({
    location: "",
    role: "",
    department: "",
    education: "",
    experience: "",
  });

  const sortHandler = (sortType, handler) => {
    const state = sort[sortType];
    let order;
    if (!state) order = "asc";
    if (state === "asc") order = "desc";
    if (state === "desc") order = "";
    setSort({
      ...sort,
      [sortType]: order,
    });

    if (order) {
      handler(sortType, order, jobs.jobs);
    }
  };

  return (
    <div className="flex justify-between mb-6 mt-4">
      <div>
        <span className="font-bold">
          {jobs && formatNumber(getJobsAmount(jobs.jobs))}
        </span>{" "}
        <span>job postings</span>
      </div>
      <div className="hidden lg:flex">
        <span className="text-gray-400 mr-2">Sort by</span>
        <SortBy
          name="Location"
          sort={sort["location"]}
          onClick={() => sortHandler("location", sortByLocation)}
        />
        <SortBy
          name="Role"
          sort={sort["required_skills"]}
          onClick={() => sortHandler("required_skills", sortByRole)}
        />
        <SortBy
          name="Department"
          sort={sort["department"]}
          onClick={() => sortHandler("department", sortByDepartment)}
        />
        <SortBy
          name="Education"
          sort={sort["required_credentials"]}
          onClick={() => sortHandler("required_credentials", sortByEducation)}
        />
        <SortBy
          name="Experience"
          sort={sort["experience"]}
          onClick={() => sortHandler("experience", sortByExperience)}
        />
      </div>
    </div>
  );
};

export default SortByItem;
