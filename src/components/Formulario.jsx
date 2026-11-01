import React, { useState } from 'react';
import '../css/Formulario.css';

const Formulario = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrarMensaje(true);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>

      <div className="campo">
        <label className="label">Moneda</label>
        <select className="select">
          <option value="">- Seleccione</option>
          <option value="USD">Dolar USD</option>
          <option value="MXN">Peso Mexicano MXN</option>
          <option value="EUR">Euro EUR</option>
          <option value="GBP">Libra Esterlina GBP</option>
        </select>
      </div>


      <div className="campo">
        <label className="label">Cryptomoneda</label>
        <select className="select">
          <option value="">- seleccione</option>
        </select>
      </div>


      <button type="submit" className="btn-cotizar">
        Cotizar
      </button>


      {mostrarMensaje && <p>Formulario creado</p>}
    </form>
  );
};

export default Formulario;