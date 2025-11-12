const request = require('supertest');
const app = require('../index.js');

// Evitar que Jest se cierre antes de terminar los tests
jest.setTimeout(10000);

describe('API Cartas Pokémon', () => {
  it('GET /cartas debe devolver un array con cartas', async () => {
    const res = await request(app).get('/cartas');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /cartas debe agregar una nueva carta', async () => {
    const nuevaCarta = {
      nombre: 'Testmon',
      tipo: 'Normal',
      psa: '10',
      cantidad: 1,
      valor: 999,
      imagen: 'https://test.com/testmon.png'
    };

    const res = await request(app).post('/cartas').send(nuevaCarta);
    expect(res.statusCode).toBe(200);
  });
});
