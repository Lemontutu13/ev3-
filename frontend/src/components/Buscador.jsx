import 'bootstrap/dist/css/bootstrap.min.css';

function Buscador({ ordenarCartas }) {
  return (
    <div className="d-flex justify-content-end mb-4">
      <select
        className="form-select w-auto"
        onChange={(e) => ordenarCartas(e.target.value)}
      >
        <option value="">Ordenar por...</option>
        <option value="nombre">Nombre (A-Z)</option>
        <option value="precio">Precio (menor a mayor)</option>
      </select>
    </div>
  );
}

export default Buscador;
