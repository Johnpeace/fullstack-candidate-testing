import { useReducer } from "react";
import axios from "axios";
import { GET_FILTERS } from "./filter.types";
import { FILTER_API_URL } from "../../utils/constants";

const filterActions = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllFilters = async () => {
    try {
      const { data } = await axios(FILTER_API_URL);

      dispatch({
        type: GET_FILTERS,
        payload: data,
      });
    } catch (e) {
      throw e;
    }
  };

  return { state, getAllFilters };
};

export default filterActions;
