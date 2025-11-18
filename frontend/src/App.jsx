import { useState, useEffect } from 'react';
import PaginaInicio from './components/PaginaInicio'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Header from './components/Header';
import Buscador from './components/Buscador';
import BotonArriba from './components/BotonArriba';

function App() {
  const [mostrarInicio, setMostrarInicio] = useState(true);
  const [cartas, setCartas] = useState([]);
  const [tipos, setTipos] = useState([]); // para el select de tipos

  // 🔹 Cargar cartas sin filtros (todas)
  const cargarTodasLasCartas = async () => {
    try {
      const res = await fetch('http://localhost:5000/cartas');
      const data = await res.json();
      setCartas(data);
    } catch (err) {
      console.error('Error al obtener cartas:', err);
    }
  };

  // 🔹 Cargar cartas filtrando SOLO por nombre
  const cargarCartasPorNombre = async (nombre = '') => {
    try {
      if (!nombre) {
        // si está vacío, traigo todas
        return cargarTodasLasCartas();
      }

      const res = await fetch(
        `http://localhost:5000/cartas?nombre=${encodeURIComponent(nombre)}`
      );
      const data = await res.json();
      setCartas(data);
    } catch (err) {
      console.error('Error al obtener cartas por nombre:', err);
    }
  };

  // 🔹 Cargar cartas filtrando SOLO por tipo
  const cargarCartasPorTipo = async (tipo = '') => {
    try {
      if (!tipo) {
        // si el tipo es vacío ("Todos los tipos"), traigo todas
        return cargarTodasLasCartas();
      }

      const res = await fetch(
        `http://localhost:5000/cartas?tipo=${encodeURIComponent(tipo)}`
      );
      const data = await res.json();
      setCartas(data);
    } catch (err) {
      console.error('Error al obtener cartas por tipo:', err);
    }
  };

  // 🔹 Al inicio: cargo todas las cartas
  useEffect(() => {
    cargarTodasLasCartas();
  }, []);

  // 🔹 Cargar tipos desde el backend
  useEffect(() => {
    const cargarTipos = async () => {
      try {
        const res = await fetch('http://localhost:5000/tipos');
        const data = await res.json();
        setTipos(data.map((t) => t.tipo)); // ['Agua', 'Fuego', ...]
      } catch (err) {
        console.error('Error al obtener tipos:', err);
      }
    };

    cargarTipos();
  }, []);

  // 🔹 Cuando el usuario escribe en la barra de búsqueda
  const manejarBusquedaNombre = (nombre) => {
    cargarCartasPorNombre(nombre);
  };

  // 🔹 Cuando el usuario elige un tipo
  const manejarFiltroTipo = (tipo) => {
    cargarCartasPorTipo(tipo);
  };

  // 👇 Pantalla de inicio (landing). Si está activa, NO mostramos nada más.
  if (mostrarInicio) {
    return <PaginaInicio onEnter={() => setMostrarInicio(false)} />;
  }

  // 👇 Una vez que se aprieta el botón de la página de inicio, se muestra la tienda
  return (
    <>
      <Header />

      <div id="inicio" className="container py-5">
        <h1 className="text-center mb-3 text-danger fw-bold">
          Catálogo de Cartas Pokémon
        </h1>
        <p className="text-center text-muted mb-4">
          Explora nuestras cartas coleccionables — ¡Atrapa la tuya antes que se agote! ⚡
        </p>

        <Buscador
          onBuscarNombre={manejarBusquedaNombre}
          onFiltrarTipo={manejarFiltroTipo}
          tipos={tipos}
        />

        {/* Catálogo de cartas */}
        {cartas.length === 0 ? (
          <p className="text-center text-muted">No hay cartas disponibles.</p>
        ) : (
          <div
            id="productos"
            className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4 justify-content-center"
          >
            {cartas.map((carta) => (
              <div key={carta.id} className="col">
                <div className="card h-100 shadow-sm">
                  <img
                    src={carta.imagen}
                    className="card-img-top"
                    alt={carta.nombre}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{carta.nombre}</h6>
                    <p className="card-text">
                      <strong>Tipo:</strong> {carta.tipo}
                    </p>
                    <p className="card-text">
                      <strong>PSA:</strong> {carta.psa || carta.rareza}
                    </p>
                    <p className="card-text">
                      <strong>Stock:</strong> {carta.cantidad}
                    </p>
                  </div>
                  <div className="card-footer text-center">
                    💰 ${carta.valor}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Novedades */}
      <div id="novedades" className="bg-warning-subtle py-5 mt-5">
        <div className="container text-center">
          <h2 className="text-danger fw-bold mb-3">🆕 Novedades</h2>
          <p className="text-muted mb-4">
            Estas son las cartas más recientes agregadas a nuestra tienda. ¡Atrápalas antes de que se agoten! ⚡
          </p>

          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 justify-content-center">
            {cartas.length > 0 ? (
              cartas
                .slice(-4)
                .map((carta) => (
                  <div key={carta.id} className="col">
                    <div className="card h-100 shadow-sm border-warning">
                      <img
                        src={carta.imagen}
                        className="card-img-top"
                        alt={carta.nombre}
                      />
                      <div className="card-body">
                        <h6 className="card-title">{carta.nombre}</h6>
                        <p className="card-text">
                          <strong>Tipo:</strong> {carta.tipo}
                        </p>
                        <p className="card-text">
                          <strong>Rareza:</strong> {carta.rareza}
                        </p>
                      </div>
                      <div className="card-footer text-center">
                        💰 ${carta.valor}
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <p className="text-muted">No hay novedades por ahora.</p>
            )}
          </div>
        </div>
      </div>

      {/* Acerca de */}
      <div id="acerca" className="bg-light py-5 mt-5">
        <div className="container text-center">
          <h2 className="text-danger fw-bold mb-3">Acerca de Nosotros</h2>
          <p className="text-muted">
            Somos una tienda dedicada a coleccionistas y fanáticos del universo Pokémon.
            Aquí encontrarás cartas únicas, legendarias y exclusivas para completar tu Pokédex.
          </p>
        </div>
      </div>

      {/* Contacto */}
      <div id="contacto" className="bg-dark text-white py-4 mt-4">
        <div className="container text-center">
          <h5>📧 Contáctanos</h5>
          <p>correo@poketienda.cl | +56 9 9999 9999</p>
          <p className="text-secondary small">
            © 2025 PokéTienda. Todos los derechos reservados.
          </p>
        </div>
      </div>

      <BotonArriba />
    </>
  );
}

export default App;
