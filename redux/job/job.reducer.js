import { JobTypes } from "./job.types";

const jobReducer = (state, action) => {
  switch (action.type) {
    case JobTypes.GET_JOBS:
    case JobTypes.GET_JOBS_BY_DEPT:
    case JobTypes.GET_JOBS_BY_SEARCH:
    case JobTypes.GET_JOBS_BY_JOBTYPE:
    case JobTypes.GET_JOBS_BY_SCHEDULE:
    case JobTypes.GET_JOBS_BY_EXPERIENCE:
    case JobTypes.GET_SORTED_ARRAY_BY_ROLE:
    case JobTypes.GET_SORTED_ARRAY_BY_DEPT:
    case JobTypes.GET_SORTED_ARRAY_BY_LOCATION:
    case JobTypes.GET_SORTED_ARRAY_BY_EDUCATION:
    case JobTypes.GET_SORTED_ARRAY_BY_EXPERIENCE:
      return { ...state, jobs: action.payload };

    default:
      return state;
  }
};

export default jobReducer;
