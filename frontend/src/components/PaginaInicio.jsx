import '../style.css';

function PaginaInicio({ onEnter }) {
  return (
    <div className="landing-container">
      {/* Capa oscura sobre la imagen de fondo */}
      <div className="landing-overlay"></div>

      {/* Contenido centrado */}
      <div className="landing-card">
        {/* Icono Pokébola */}
        <div className="landing-icon-wrapper" onClick={onEnter}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png"
            alt="Entrar a PokéTienda"
            className="landing-pokeball"
          />
        </div>

        {/* Títulos */}
        <h1 className="landing-title">PokéTienda TCG</h1>
        <p className="landing-subtitle">
          Colecciona, descubre y organiza tus cartas Pokémon favoritas.
        </p>

        {/* Etiquetas / badges de características */}
        <div className="landing-tags">
          <span className="landing-tag">⭐ Cartas gradadas</span>
          <span className="landing-tag">🔥 Rarezas únicas</span>
          <span className="landing-tag">💾 Datos desde la base de datos</span>
        </div>

        {/* Botón principal */}
        <button className="landing-button" onClick={onEnter}>
          Entrar al catálogo
        </button>

        {/* Texto pequeño abajo */}
        <p className="landing-hint">
          Haz clic en la Pokébola o en el botón para acceder a la página principal.
        </p>
      </div>
    </div>
  );
}

export default PaginaInicio;
