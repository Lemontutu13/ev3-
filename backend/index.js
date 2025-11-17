const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

app.use(cors());
app.use(express.json());

// Configuro conexioon
const pool = new Pool({
  user: 'postgres',       
  host: 'localhost',
  database: 'pokedb',       
  password: 'cft.2025',
  port: 5432,
});

//obtener todas las cartas
app.get('/cartas', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cartas ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener las cartas');
  }
});

//agregar una nueva carta
app.post('/cartas', async (req, res) => {
  const { nombre, tipo, psa, cantidad, valor, imagen } = req.body;

  // Validación simple (evita errores por campos vacíos)
  if (!nombre || !tipo || !psa || !cantidad || !valor || !imagen) {
    return res.status(400).send('Todos los campos son obligatorios');
  }

  try {
    await pool.query(
      'INSERT INTO cartas (nombre, tipo, psa, cantidad, valor, imagen) VALUES ($1, $2, $3, $4, $5, $6)',
      [nombre, tipo, psa, cantidad, valor, imagen]
    );
    res.send('Carta agregada correctamente');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al insertar carta');
  }
});

// Servidor (solo se ejecuta si el archivo es el principal)
if (require.main === module) {
  app.listen(5000, () => console.log('✅ Servidor corriendo en http://localhost:5000'));
}

module.exports = app;
