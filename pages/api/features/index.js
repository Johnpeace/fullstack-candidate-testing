import { FILTERS } from "../../../utils/constants";
export default class Features {
  constructor(jobs) {
    this.jobs = jobs;
    this.filters = FILTERS;
  }

  payload(job, items) {
    return {
      items,
      name: job.name,
      job_title: job.job_title,
      total_jobs_in_hospital: job.total_jobs_in_hospital,
    };
  }

  filterBy(filter, query) {
    if (!query || query === "" || !this.filters.includes(filter)) {
      return this;
    } else {
      this.jobs = this.jobs.map((job) => {
        const filteredItem = job.items.filter((item) => {
          if (Array.isArray(item[filter])) {
            return item[filter]
              .map((item) => item.toLowerCase())
              .includes(query.toLowerCase());
          } else {
            return item[filter].toLowerCase() === query.toLowerCase();
          }
        });
        return this.payload(job, filteredItem);
      });

      return this;
    }
  }

  search(search) {
    const searchString = search && search.toLowerCase().trim();
    if (!searchString || searchString === "") {
      return this;
    } else {
      this.jobs = this.jobs.map((job) => {
        const filteredItem = [];
        const ids = [];
        job.items.forEach((record) => {
          for (let key in record) {
            if (Array.isArray(record[key])) {
              if (
                record[key]
                  .map((item) => item.toString().toLowerCase().trim())
                  .indexOf(searchString) > -1 &&
                !ids.includes(record["job_id"])
              ) {
                filteredItem.push(record);
                ids.push(record["job_id"]);
              }
            } else {
              if (
                record[key].toString().toLowerCase().indexOf(searchString) >
                  -1 &&
                !ids.includes(record["job_id"])
              ) {
                filteredItem.push(record);
                ids.push(record["job_id"]);
              }
            }
          }
        });
        return this.payload(job, filteredItem);
      });

      return this;
    }
  }
}
