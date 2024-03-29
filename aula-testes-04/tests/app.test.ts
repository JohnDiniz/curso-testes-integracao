import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("GET /event endpoint", () => {
  it("should return a 200 status code and match partial object", async () => {
    const result = await api.get("/event");
    expect(result.status).toBe(200);
    expect(result.body).toMatchObject({
      // id: 1,
      title: "Super Event!",
      image:
        "https://img.freepik.com/fotos-gratis/publico-animado-assistindo-fogos-de-artificio-de-confete-e-se-divertindo-no-festival-de-musica-a-noite-copiar-espaco_637285-559.jpg",
      date: "2023-07-21T00:00:00.000Z",
    });
  });

  it("should return a 200 status code and match exact object", async () => {
    const result = await api.get("/event");
    expect(result.status).toBe(200);
    expect(result.body).toEqual({
      id: expect.any(Number),
      title: "Super Event!",
      image:
        "https://img.freepik.com/fotos-gratis/publico-animado-assistindo-fogos-de-artificio-de-confete-e-se-divertindo-no-festival-de-musica-a-noite-copiar-espaco_637285-559.jpg",
      date: "2023-07-21T00:00:00.000Z",
    });
  });

  it("should return a 200 status code and match partial object with types", async () => {
    const result = await api.get("/event");
    expect(result.status).toBe(200);
    expect(result.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        title: expect.any(String),
        image: expect.any(String),
        date: expect.any(String),
      })
    );
  });
});
