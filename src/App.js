import axios from "axios";
import ContextApi from "./components/Context/ContextApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import Pizza_detalle from "./components/Pizza_detalle";
import Carrito from "./components/Carrito";
//import ContextTotal from "./components/Context/ContextTotal";


function App() {
  const endpoint = "/pizzas.json";



  const cargarPizzas = async () => {
    const res = await axios.get(endpoint);
    const info = res.data;
    const filtradoPizzas = info.map((ele) => ({
      id: ele.id,
      desc: ele.desc,
      src: ele.img,
      ing: ele.ingredients,
      nombre: ele.name,
      precio: ele.price,
      estado:false,
      cantidad:1,
    }));
    setPizzas(filtradoPizzas);
  };

  const [total, setTotal] = useState(0);
  //const totales = { total, setTotal };

  const [pizzas, setPizzas] = useState([]);
  //const totalPizzas = { pizzas, setPizzas };

  const [carroCompra,setCarroCompra] = useState([]);

  //almaceno las pizzas en la vista Carrito

  useEffect(() => {
    cargarPizzas();
  },[]);

  return (
    <>
   
      <ContextApi.Provider value={ {pizzas,total,carroCompra,setPizzas,setCarroCompra,setTotal}}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Pizza/:id" element={<Pizza_detalle />} />
            <Route path="/Carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </ContextApi.Provider>
    </>
  );
}

export default App;
