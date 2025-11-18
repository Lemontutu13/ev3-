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
  password: 'postgres',
  port: 5432,
});

app.get('/cartas', async (req, res) => {
  const { nombre, tipo } = req.query;

  try {
    let query = 'SELECT * FROM cartas';
    let values = [];

    // si filtro por tipo
    if (tipo) {
      query += ' WHERE tipo = $1 ORDER BY id ASC';
      values = [tipo];
    }

    // si filtro por nombre (y NO por tipo)
    else if (nombre) {
      query += ' WHERE LOWER(nombre) LIKE LOWER($1) ORDER BY id ASC';
      values = [`%${nombre}%`];
    }

    // si no hay filtros → todas las cartas
    else {
      query += ' ORDER BY id ASC';
    }

    const result = await pool.query(query, values);
    res.json(result.rows);

  } catch (err) {
    console.error('Error al obtener cartas:', err);
    res.status(500).send('Error al obtener cartas');
  }
});

// obtener lista de tipos distintos
app.get('/tipos', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT DISTINCT tipo FROM cartas ORDER BY tipo ASC'
    );
    res.json(result.rows); // [{ tipo: 'Agua' }, { tipo: 'Fuego' }, ...]
  } catch (err) {
    console.error('Error al obtener tipos:', err);
    res.status(500).send('Error al obtener tipos');
  }
});


// Servidor (solo se ejecuta si el archivo es el principal)
if (require.main === module) {
  app.listen(5000, () => console.log('✅ Servidor corriendo en http://localhost:5000'));
}

module.exports = app;
