import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Header from './components/Header';
import Buscador from './components/Buscador';
import BotonArriba from './components/BotonArriba';

function App() {
  const [cartas, setCartas] = useState([]);
  const [cartasOriginales, setCartasOriginales] = useState([]);

  {/* Consumo datos del backend */}
  useEffect(() => {
    fetch('http://localhost:5000/cartas') //llamo al backend que obtiene los datos de la base de datos
      .then(res => res.json()) //convierte la respuesta en formato json
      .then(data => {
        setCartas(data);
        setCartasOriginales(data); //guarda la lista para mostrarlas
      })
      .catch(err => console.error('Error al obtener cartas:', err));
  }, []);

  const ordenarCartas = (criterio) => {
    let cartasOrdenadas = [...cartasOriginales];

    if (criterio === 'nombre') {
      cartasOrdenadas.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (criterio === 'precio') {
      cartasOrdenadas.sort((a, b) => a.valor - b.valor);
    }

    setCartas(cartasOrdenadas);
  };

  return (
    <>
      <Header />

      {/* Sección principal */}
      <div id="inicio" className="container py-5">
        <h1 className="text-center mb-3 text-danger fw-bold">Catálogo de Cartas Pokémon</h1>
        <p className="text-center text-muted mb-4">
          Explora nuestras cartas coleccionables — ¡Atrapa la tuya antes que se agote! ⚡
        </p>

        {/* ordenar por... */}
        <Buscador ordenarCartas={ordenarCartas} />

        {/* Catálogo de cartas */}
        {cartas.length === 0 ? ( //si no hay cartas muestra el msj no hay cartas 
          <p className="text-center text-muted">No hay cartas disponibles.</p>
        ) : (
          <div id="productos" className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4 justify-content-center">
            {cartas.map((carta) => ( // si hay .map recorre las cartas del arreglo y renderiza una card de boostrap
              <div key={carta.id} className="col">
                <div className="card h-100 shadow-sm">
                  <img
                    src={carta.imagen}
                    className="card-img-top"
                    alt={carta.nombre}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{carta.nombre}</h6>
                    <p className="card-text"><strong>Tipo:</strong> {carta.tipo}</p>
                    <p className="card-text"><strong>PSA:</strong> {carta.psa || carta.rareza}</p>
                    <p className="card-text"><strong>Stock:</strong> {carta.cantidad}</p>
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
      <div id="novedades" className="bg-warning-subtle py-5 mt-5">
        <div className="container text-center">
          <h2 className="text-danger fw-bold mb-3">🆕 Novedades</h2>
          <p className="text-muted mb-4">
            Estas son las cartas más recientes agregadas a nuestra tienda. ¡Atrápalas antes de que se agoten! ⚡
          </p>

          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 justify-content-center">
            {cartas.length > 0 ? (
              cartas
                .slice(-4) // muestro las ultimas 4 cartas que agregue a la base de datos
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
                        <p className="card-text"><strong>Tipo:</strong> {carta.tipo}</p>
                        <p className="card-text"><strong>Rareza:</strong> {carta.rareza}</p>
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

      <div id="acerca" className="bg-light py-5 mt-5">
        <div className="container text-center">
          <h2 className="text-danger fw-bold mb-3">Acerca de Nosotros</h2>
          <p className="text-muted">
            Somos una tienda dedicada a coleccionistas y fanáticos del universo Pokémon.
            Aquí encontrarás cartas únicas, legendarias y exclusivas para completar tu Pokédex.
          </p>
        </div>
      </div>

      <div id="contacto" className="bg-dark text-white py-4 mt-4">
        <div className="container text-center">
          <h5>📧 Contáctanos</h5>
          <p>correo@poketienda.cl | +56 9 9999 9999</p>
          <p className="text-secondary small">© 2025 PokéTienda. Todos los derechos reservados.</p>
        </div>
      </div>
      <BotonArriba />
    </>
  );
}
export default App;
