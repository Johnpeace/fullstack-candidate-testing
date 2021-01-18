import { useReducer } from "react";
import axios from "axios";

import { JobTypes } from "./job.types";
import { sortBy } from "../../utils";
import { JOB_API_URL } from "../../utils/constants";

const jobActions = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllJobs = async () => {
    try {
      const { data } = await axios.get(JOB_API_URL);

      dispatch({
        type: JobTypes.GET_JOBS,
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };

  const filterByJobType = async (params) => {
    try {
      const { data } = await axios.get(JOB_API_URL, { params });

      dispatch({
        type: JobTypes.GET_JOBS_BY_JOBTYPE,
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };

  const filterByDepartment = async (params) => {
    try {
      const { data } = await axios.get(JOB_API_URL, { params });

      dispatch({
        type: JobTypes.GET_JOBS_BY_DEPT,
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };

  const filterBySchedule = async (params) => {
    try {
      const { data } = await axios.get(JOB_API_URL, { params });

      dispatch({
        type: JobTypes.GET_JOBS_BY_SCHEDULE,
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };

  const filterByExperience = async (params) => {
    try {
      const { data } = await axios.get(JOB_API_URL, { params });

      dispatch({
        type: JobTypes.GET_JOBS_BY_EXPERIENCE,
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };

  const filterBySearch = async (params) => {
    try {
      const { data } = await axios.get(JOB_API_URL, { params });

      dispatch({
        type: JobTypes.GET_JOBS_BY_SEARCH,
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };
  const sortByLocation = (sortType, order, list) => {
    try {
      const jobs = sortBy(sortType, order, list);

      dispatch({
        type: JobTypes.GET_SORTED_ARRAY_BY_LOCATION,
        payload: { jobs },
      });
    } catch (error) {
      throw error;
    }
  };

  const sortByRole = (sortType, order, list) => {
    try {
      const jobs = sortBy(sortType, order, list);

      dispatch({
        type: JobTypes.GET_SORTED_ARRAY_BY_ROLE,
        payload: { jobs },
      });
    } catch (error) {
      throw error;
    }
  };

  const sortByDepartment = (sortType, order, list) => {
    try {
      const jobs = sortBy(sortType, order, list);

      dispatch({
        type: JobTypes.GET_SORTED_ARRAY_BY_DEPT,
        payload: { jobs },
      });
    } catch (error) {
      throw error;
    }
  };

  const sortByEducation = (sortType, order, list) => {
    try {
      const jobs = sortBy(sortType, order, list);

      dispatch({
        type: JobTypes.GET_SORTED_ARRAY_BY_EDUCATION,
        payload: { jobs },
      });
    } catch (error) {
      throw error;
    }
  };

  const sortByExperience = (sortType, order, list) => {
    try {
      const jobs = sortBy(sortType, order, list);

      dispatch({
        type: JobTypes.GET_JOBS_BY_EXPERIENCE,
        payload: { jobs },
      });
    } catch (error) {
      throw error;
    }
  };

  return {
    state,
    getAllJobs,
    sortByDepartment,
    sortByEducation,
    sortByLocation,
    sortByRole,
    sortByExperience,
    filterByJobType,
    filterByDepartment,
    filterBySchedule,
    filterByExperience,
    filterBySearch,
  };
};

export default jobActions;
