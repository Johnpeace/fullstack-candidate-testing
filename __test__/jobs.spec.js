import { createMocks } from "node-mocks-http";

import jobs from "../data/jobs.json";
import jobAPI from "../pages/api/jobs";

describe("Test Jobs API Endpoint: /api/jobs", () => {
  it("should request without params", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });
    await jobAPI(req, res);
    const data = JSON.parse(res._getData()).jobs;
    expect(data).toEqual(jobs);
    expect(res._getStatusCode()).toBe(200);
  });

  it("should request with JOB TYPE filter", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        filter: "job_type:Part-time",
      },
    });
    await jobAPI(req, res);
    const data = JSON.parse(res._getData()).jobs[0].items[0].job_type;
    expect(data).toEqual("Part-time");
    expect(res._getStatusCode()).toBe(200);
  });

  it("should request with WORK SCHEDULE filter", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        filter: "work_schedule:Day shift",
      },
    });
    await jobAPI(req, res);
    const data = JSON.parse(res._getData()).jobs[0].items[0].work_schedule;
    expect(data).toEqual("Day shift");
    expect(res._getStatusCode()).toBe(200);
  });

  it("should request with DEPARTMENT filter", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        filter: "department:Pediatrics",
      },
    });
    await jobAPI(req, res);
    const data = JSON.parse(res._getData()).jobs[0].items[0].department[1];
    expect(data).toEqual("Pediatrics");
    expect(res._getStatusCode()).toBe(200);
  });

  it("should request with EXPERIENCE filter", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        filter: "experience:Senior",
      },
    });
    await jobAPI(req, res);
    const data = JSON.parse(res._getData()).jobs[0].items[0].experience;
    expect(data).toEqual("Senior");
    expect(res._getStatusCode()).toBe(200);
  });

  it("should search Part-time JOB TYPE", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        search: "Part-time",
      },
    });
    await jobAPI(req, res);
    const data = JSON.parse(res._getData()).jobs[0].items[0].job_type;
    expect(data).toEqual("Part-time");
    expect(res._getStatusCode()).toBe(200);
  });

  it("should search any DEPARTMENT", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        search: "Medicine",
      },
    });
    await jobAPI(req, res);
    const data = JSON.parse(res._getData()).jobs[0].items[0].department[0];
    expect(data).toEqual("Medicine");
    expect(res._getStatusCode()).toBe(200);
  });

  it("should search any Day shift WORK SCHEDULE", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        search: "Day shift",
      },
    });
    await jobAPI(req, res);
    const data = JSON.parse(res._getData()).jobs[0].items[0].work_schedule;
    expect(data).toEqual("Day shift");
    expect(res._getStatusCode()).toBe(200);
  });
});
