// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jobs from "../../data/jobs.json";
import Features from "./features";

export default async (req, res) => {
  res.statusCode = 200;
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

  let features = new Features(jobs);
  const { filter, search } = req.query;
  let result;

  try {
    if (filter) {
      const queryStringArray = filter.split(":");
      result = features.filterBy(
        queryStringArray[0].trim(),
        decodeURIComponent(queryStringArray[1].trim())
      ).jobs;
      return res.json({ jobs: result });
    } else if (search) {
      result = features.search(decodeURIComponent(search)).jobs;
      return res.json({ jobs: result });
    } else {
      return res.json({ jobs });
    }
  } catch (error) {
    res.json({ jobs: error.toString() });
  }

  res.json({});
};
