import React, { useEffect } from "react";
import ContextApi from "./Context/ContextApi";
import { useContext } from "react";
import Swal from "sweetalert2";

const Carrito = () => {
  const { pizzas, carroCompra, setCarroCompra, total, setTotal } =
    useContext(ContextApi);

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
    Swal.fire({
      title: "Eliminada",
      text: "Eliminastes 1 producto de tu carrito",
      icon: "success",
    });
  };

  const incrementCount = (item) => {
    const index = carroCompra.findIndex((ele) => ele.id === item.id);
    carroCompra[index].cantidad += 1;
    setCarroCompra([...carroCompra]);
    console.log(carroCompra);
  };

  const decrementCount = (item) => {
    const index = carroCompra.findIndex((ele) => ele.id === item.id);
    carroCompra[index].cantidad -= 1;
    setCarroCompra([...carroCompra]);
  };

  const totalCarrito =()=>{
    setTotal(convertPrice(carroCompra.reduce((acc, item)=>acc + item.precio*item.cantidad,0)))
  }

  //el resultado lo puedo ir acumulando en un array

  return (
    <>
      <div className="container my-5 bg-light p-3" >
        {/* el array entra con el estado a true para poder mostrarse en el carrito y si se elimina con el click pasa con un estado a false */}
        {carroCompra.map((item) => (
          <div className="row">
          <div className="col-12 col-md-12 col-xl-6">
          <ol key={item.id} className="list-group">
            <li className=" list-group-item d-flex  align-items-start mt-2">
              <div className="ms-1 me-auto mt-2">
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
              <div className="mx-4 text-success  ">
                $:
                {convertPrice(item.precio * item.cantidad)}
              </div>
              <div className="d-flex  mt-2 p-0">
                <button
                  style={{width:'30px',height:'30px'}}
                  className="btn btn-primary "
                  onClick={() => incrementCount(item)}
                >
                  ✚
                </button>
                <span className="m-2">{item.cantidad}</span>
                <button
                style={{width:'30px',height:'30px'}}
                  disabled={item.cantidad <= 0}
                  className="btn btn-danger"
                  onClick={() => decrementCount(item)}
                >
                  ‒
                </button>
              </div>
            </li>
          </ol>
          </div>
          </div>
        ))}
        <li className="list-group-item d-flex justify-content-start mt-3">
          <div className="ms-1 me-auto ">
            <div className="fw-bold h4">
              <p className="mx-2 ">
                Total:{" "}
                <span>
                  ${total}
                  {totalCarrito()}
                </span>
              </p>
            </div>
            <button className="btn btn-success w-100">Ir a Pagar</button>
          </div>
        </li>
      </div>
    </>
  );
};

export default Carrito;
