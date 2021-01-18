import Features from "../pages/api/features";

import { mockData, filters } from "./__mocks__";
let features;
beforeEach(() => {
  features = new Features(mockData);
});
describe("Job Features", () => {
  it("should test features contructor", () => {
    expect(features.jobs).toEqual(mockData);
    expect(features.filters).toEqual(filters);
    expect(Array.isArray(features.jobs)).toBeTruthy();
  });

  it("should return an instance of Features object", () => {
    expect(features.filterBy()).toBeInstanceOf(Features);
  });
  it("should return the jobs payload if querystring is undefined", () => {
    expect(features.filterBy().jobs).toEqual(mockData);
  });
  it("should return jobs if filterstring  is not in features.filters", () => {
    expect(features.filterBy("state", "Texas").jobs).toEqual(mockData);
  });
  it("should give back the desired result", () => {
    expect(features.filterBy("department", "Medicine").jobs).toEqual(mockData);
    expect(
      features.filterBy("department", "Medicine").jobs[0].items
    ).toHaveLength(1);
    expect(
      features.filterBy("department", "cardioii").jobs[0].items
    ).toHaveLength(0);
  });

  it("should return an instance of the Features class", () => {
    expect(features.search()).toBeInstanceOf(Features);
  });
  it("should return the jobs payload if searchString is undefined or empty", () => {
    expect(features.search().jobs).toEqual(mockData);
    expect(features.search("").jobs).toEqual(mockData);
  });
  it("should search for departments that matches the searchstring", () => {
    expect(features.search("Medicine").jobs[0].items).toHaveLength(1);
    expect(features.search("Urology").jobs[0].items).toHaveLength(0);
  });
  it("should search for hospital name that matches the searchstring", () => {
    expect(features.search("Mammoth").jobs[0].items).toHaveLength(1);
    expect(features.search("cavinana").jobs[0].items).toHaveLength(0);
  });
  it("should search for job_title name that matches the searchstring", () => {
    expect(features.search("LPN Charge Nurse").jobs[0].items).toHaveLength(1);
    expect(features.search("cavinana").jobs[0].items).toHaveLength(0);
  });
});
