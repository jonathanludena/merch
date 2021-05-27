import React, { useContext } from "react";
import AppContext from "../context/AppContext";

import "../styles/components/Success.css";

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer.name}, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion: {buyer.address}</span>
        <div className="Success-map">Google Maps</div>
      </div>
    </div>
  );
};

export default Success;
