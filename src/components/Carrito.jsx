import React, { useState, useEffect } from "react";
import ContextApi from "./Context/ContextApi";
import { useContext } from "react";

const Carrito = () => {
  const { pizzas, setPizzas, carroCompra, setCarroCompra, total, setTotal } =
    useContext(ContextApi);
  const [count, setCount] = useState(0);
  const [precio, setPrecio] = useState(0);

  const convertPrice = (precio) => {
    return precio.toLocaleString("es-Cl");
  };

  useEffect(() => {
    const filtrado = pizzas.filter((ele) => ele.estado);
    setCarroCompra(filtrado);
    console.log(filtrado);
  }, []);

  //borrar pizza
  const deleteItems = (id) => {
    const pizza = carroCompra.filter((ele) => ele.id !== id);
    setCarroCompra(pizza);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  //el resultado lo puedo ir acumulando en un array
 

  return (
    <>
      <div className="container my-5 bg-light p-3" style={{ maxWidth: "65%" }}>
        {/* el array entra con el estado a true para poder mostrarse en el carrito y si se elimina con el click pasa con un estado a false */}
        {carroCompra.map((item) => (
          <ol key={item.id} className="list-group">
            <li className=" list-group-item d-flex justify-content-between align-items-start my-2">
              <div className="ms-1 me-auto">
                <div className="fw-bold">
                  <img
                    onClick={() => deleteItems(item.id)}
                    style={{ cursor: "pointer" }}
                    className="mx-2"
                    src={item.src}
                    alt="picfoto"
                    width="30"
                    height="24"
                  />
                  {item.nombre}
                </div>
              </div>
              <div className="mx-4 text-success ">
                $:
                {convertPrice(item.precio * count)}
              </div>
              <div className="flex justify-between">
                <button className="btn btn-primary" onClick={incrementCount}>
                  ✚
                </button>
                <span className="m-3">{count}</span>
                <button
                  disabled={count <= 0}
                  className="btn btn-danger"
                  onClick={decrementCount}
                >
                  ‒
                </button>
              </div>
            </li>
          </ol>
        ))}
        <li className="list-group-item d-flex justify-content-start">
          <div className="ms-1 me-auto ">
            <div className="fw-bold h4">
              <p className="mx-2 ">
                Total:{" "}
                <span>
                  ${total}
                  {setTotal(convertPrice(
                    carroCompra.reduce(
                      (acc, item) => acc + item.precio * count,
                      0
                    )
                  ))}
                </span>
              </p>
            </div>
            <button className="btn btn-success">Ir a Pagar</button>
          </div>
        </li>
      </div>
    </>
  );
};

export default Carrito;
