export const formatNumber = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getJobsAmount = (jobs) => {
  let length = 0;
  jobs.forEach((job) => {
    length += job.items.length;
  });
  return length;
};

export const formatInitials = (value) => {
  return value.substr(0, 2);
};

export const formatDepartments = (dept) => {
  return dept.join().replaceAll(",", ", ");
};

export const sortBy = (sortType, order, records) => {
  let array = records.filter((item) => item.items.length > 0);
  return array
    .map((job) => {
      let sortedItems = [
        ...job.items.sort((a, b) => {
          return orderBy(order, a[sortType], b[sortType]);
        }),
      ];
      return payload(job, sortedItems);
    })
    .sort((a, b) => {
      return orderBy(order, a.items[0][sortType], b.items[0][sortType]);
    });
};

const orderBy = (order, a, b) => {
  if (order === "asc") {
    return a > b ? 1 : -1;
  } else if (order === "desc") {
    return b > a ? 1 : -1;
  }
};

const payload = (job, filteredItem) => {
  return {
    total_jobs_in_hospital: job.total_jobs_in_hospital,
    name: job.name,
    job_title: job.job_title,
    items: filteredItem,
  };
};
