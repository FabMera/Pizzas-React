import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ContextApi from "./Context/ContextApi";

const Pizza_detalle = () => {
  const { pizzas } = useContext(ContextApi);

  const { id } = useParams(); //AQUI TRAIGO EL ID SELECCIONADO POR PARAMETRO

  return (
    <>
      <div
        className="card mb-3 d-flex align-items-center mt-5 mx-auto"
        style={{ width: "60%" }}
      >
        {pizzas
          .filter((item) => item.id === id)

          .map((item) => (
            <div key={item.id} className="row g-2 mt-5 p-2">
              <div className="col-md-4">
                <img
                  src={item.src}
                  className="img-fluid rounded-start"
                  alt="pizza"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.nombre}</h5>
                  <hr />
                  <p className="card-text">{item.desc}</p>
                  <ul className="list-group list-group-flush">
                    <p className="card-text">
                      <b>Ingredientes:</b>
                    </p>
                    <li className="list-group-item">🍕 {item.ing[0]}</li>
                    <li className="list-group-item">🍕 {item.ing[1]}</li>
                    <li className="list-group-item">🍕 {item.ing[2]}</li>
                    <li className="list-group-item">🍕 {item.ing[3]}</li>
                  </ul>
                  <h3 className="m-3">
                    $<span>{item.precio}</span>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <Link to="/">
                      <button className="btn btn-info ">🍕Regresar</button>
                    </Link>
                    <Link to="/Carrito">
                      <button className="btn btn-danger">
                        &#128722;Añadir
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Pizza_detalle;
