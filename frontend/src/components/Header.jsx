import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger shadow">
            <div className="container">
                <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#inicio">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png"
                        alt="Pokéball"
                        width="32"
                        height="32"
                    />
                    Tienda TCG
                </a>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#inicio">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#acerca">Acerca de Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#productos">Cartas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#novedades">Novedades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
