import React from "react";

const cardList = () => {
  return (
    <div className="card mt-4">
      <header>
        <div className="columns">
          <div className="column is-2">
            <h1 className="card-header-title">Imagen</h1>
            <p className="ml-4">Nombre</p>
          </div>

          <div className="column is-2">
            <h1 className="card-header-title">Nombre</h1>
            <p className="ml-4">Nombre</p>
          </div>

          <div className="column is-2">
            <h1 className="card-header-title">Capacidad</h1>
            <p className="ml-4">Capacidad</p>
          </div>

          <div className="column is-2">
            <h1 className="card-header-title">Camara</h1>
            <p className="ml-4">Camara</p>
          </div>

          <div className="column is-2">
            <h1 className="card-header-title">Modelo</h1>
            <p className="ml-4">Modelo</p>
          </div>

          <div className="column is-2">
            <h1 className="card-header-title">Accion</h1>
            <p className="ml-4">Accion</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default cardList;
