const request = require("supertest");
const app = require("../index.js"); 

test("GET /cartas responde con código 200", async () => {
  const res = await request(app).get("/cartas");

  expect(res.statusCode).toBe(200);
});
