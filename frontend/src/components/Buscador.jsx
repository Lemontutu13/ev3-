import 'bootstrap/dist/css/bootstrap.min.css';

function Buscador({ onBuscarNombre, onFiltrarTipo, tipos = [] }) {
  const manejarCambioNombre = (e) => {
    onBuscarNombre(e.target.value); //el input del cuadro de busqueda llama a esta funcion 
  };

  const manejarCambioTipo = (e) => {
    onFiltrarTipo(e.target.value); 
  };

  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
      {/* Barra de búsqueda por nombre */}
      <input
        type="text"
        className="form-control"
        placeholder="Buscar por nombre de Pokémon..."
        onChange={manejarCambioNombre}
      />

      {/* Filtro por tipo */}
      <select
        className="form-select w-auto"
        onChange={manejarCambioTipo}
      >
        <option value="">Todos los tipos</option>
        {tipos.map((tipo) => (
          <option key={tipo} value={tipo}>
            {tipo}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Buscador;
