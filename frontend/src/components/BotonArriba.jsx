import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

function BotonArriba() {
  const [visible, setVisible] = useState(false);

  // Detecta cuando se hace scroll para mostrar el botón
  useEffect(() => {
    const manejarScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', manejarScroll);
    return () => window.removeEventListener('scroll', manejarScroll);
  }, []);

  // Función que lleva al inicio
  const irArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={irArriba}
          className="btn-volver-arriba"
          title="Volver arriba"
        >
          ⬆️
        </button>
      )}
    </>
  );
}

export default BotonArriba;
