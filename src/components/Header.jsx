import React from "react";

const Header = () => {
  return (
    <>
      <div
        className="card text-bg-dark mx-auto"
        style={{ width: "65%", borderRadius: "0px" }}
      >
        <img
          src="pz1.png"
          className="card-img"
          alt="..."
          style={{ opacity: "0.3" }}
        />
        <div className="card-img-overlay">
          <h1 className="card-title text-center my-3 ">
            <b>!Pizzería Mamma Mía!</b>
          </h1>
          <p className="card-text text-center ">
            !Tenemos las mejores pizzas que podras encontrar!
            <hr />
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;