import { useContext } from "react";
import ContextApi from "./Context/ContextApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Pizzas = () => {
  const { pizzas, setPizzas, setTotal } = useContext(ContextApi);

  const navigate = useNavigate();

  //usamos navigate con el parametro de id
  const irAlDetalle = (id) => {
    navigate(`/Pizza/${id}`);
  };
  //funcion para agregar un elemento al carrito

  const addCarro = (ele) => {
    const result = [...pizzas];
    const index = result.findIndex((item) => item.id === ele.id);
    result[index].estado = true;
    setPizzas(result);
    setTotal(result[index].precio);
    if (result[index].estado) {
      return Swal.fire({
        title: "!Bien Hecho!",
        text: "Pizza Agregada",
        icon: "success",
      });
    }

    console.log("agregada..");
  };

  return (
    <div className="container">
      <div className="row w-100 mx-0 mt-5 ">
        {pizzas.map((ele) => (
          <div
            key={ele.nombre}
            className="card mx-auto my-3 p-0 shadow p-3 mb-5 bg-white rounded "
            style={{ maxWidth: "18rem" }}
          >
            <img src={ele.src} className="card-img-top " alt="p1" />
            <div className="card-body">
              <h4 className="card-title">{ele.nombre}</h4>
            </div>
            <ul className="list-group list-group-flush">
              <p className="card-text m-2">
                <b>Ingredientes:</b>
              </p>
              <li className="list-group-item">🍕{ele.ing[0]}</li>
              <li className="list-group-item">🍕{ele.ing[1]}</li>
              <li className="list-group-item">🍕{ele.ing[2]}</li>
              <li className="list-group-item">🍕{ele.ing[3]}</li>
            </ul>
            <div className="card-body text-center">
              <h5 className="my-2">
                $<span>{ele.precio}</span>
              </h5>
              <button
                onClick={() => irAlDetalle(ele.id)}
                className="btn btn-info me-2 my-2 "
              >
                👀Ver mas
              </button>

              <button className="btn btn-danger" onClick={() => addCarro(ele)}>
                🛒Añadir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizzas;
