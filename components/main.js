import React, { useState, memo, useContext } from "react";
import Listing from "./listing";
import { FilterContext } from "./context";
import { formatNumber, getJobsAmount } from "../utils";
import SortBy from "./sort-by";
import SortByItem from "./sort-by-item";

const Main = memo(() => {
  const { jobs } = useContext(FilterContext);

  return (
    <div className="flex flex-col flex-1 p-4 bg-white border border-gray-200 text-xs">
      <SortByItem />
      <div className="flex flex-col">
        {jobs &&
          jobs.jobs.map(({ name, items }) => (
            <Listing
              key={name}
              name={name}
              positions={items.length}
              list={items}
            />
          ))}
      </div>
    </div>
  );
});

export default Main;
