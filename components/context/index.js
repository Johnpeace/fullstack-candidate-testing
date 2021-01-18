import React, { createContext, useMemo, useState, useEffect } from "react";

import filterReducer from "../../redux/filter/filter.reducer";
import jobReducer from "../../redux/job/job.reducer";
import filterActions from "../../redux/filter/filter.actions";
import jobActions from "../../redux/job/job.actions";

export const FilterContext = createContext({
  modalToggle: false,
  filters: [],
  jobs: [],
  handleToggle: () => {},
  filterByJobType: () => {},
  filterByDepartment: () => {},
  filterBySchedule: () => {},
  filterByExperience: () => {},
  filterBySearch: () => {},
  sortByRole: () => {},
  sortByDepartment: () => {},
  sortByEducation: () => {},
  sortByLocation: () => {},
  sortByExperience: () => {},
});

export default function FilterProvider(props) {
  const { state: filters, getAllFilters } = filterActions(filterReducer, {
    filters: null,
  });

  const {
    state: jobs,
    getAllJobs,
    filterByJobType,
    filterByDepartment,
    filterBySchedule,
    filterByExperience,
    filterBySearch,
    sortByDepartment,
    sortByEducation,
    sortByRole,
    sortByLocation,
    sortByExperience,
  } = jobActions(jobReducer, {
    jobs: null,
    sortby: {
      location: "",
      experience: "",
      department: "",
      required_credentials: "",
      required_skills: "",
    },
  });

  const [modalToggle, setModalToggle] = useState(false);

  useEffect(async () => {
    await getAllFilters();
    await getAllJobs();
  }, []);

  const contextValue = useMemo(() => {
    return {
      modalToggle,
      filters: filters.filters,
      jobs: jobs.jobs,
      sortBy: jobs.sortby,
      sortByEducation,
      handleToggle: setModalToggle,
      filterByJobType,
      filterByDepartment,
      filterBySchedule,
      filterByExperience,
      filterBySearch,
      sortByDepartment,
      sortByExperience,
      sortByLocation,
      sortByRole,
    };
  }, [filters, jobs, modalToggle]);

  return (
    <FilterContext.Provider value={contextValue}>
      {props.children}
    </FilterContext.Provider>
  );
}
