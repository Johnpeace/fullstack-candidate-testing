import { createMocks } from "node-mocks-http";

import filtersApi from "../pages/api/filters";
import filters from "../data/filters.json";

describe("Test Filters API Endpoint: /api/filters", () => {
  it("should request without params", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });
    await filtersApi(req, res);
    const data = JSON.parse(res._getData())
    expect(res._getStatusCode()).toBe(200);
    expect(data).toEqual(filters);
  });
});
