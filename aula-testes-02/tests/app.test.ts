import app from "../src/app";
import supertest from "supertest";

describe("GET /health", () => {
  it("deve retornar status 200 ao acessar a rota /health", async () => {
    const result = await supertest(app).get("/health");
    const status = result.status;
    expect(status).toEqual(200);
  });
});
