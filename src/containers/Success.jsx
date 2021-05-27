import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../context/AppContext";

import Map from "../components/Map";
import useGoogleAddress from "../hooks/useGoogleAddress";
import "../styles/components/Success.css";

const Success = () => {
  const {
    state: { buyer },
  } = useContext(AppContext);
  const location = useGoogleAddress(buyer.address);
  const history = useHistory();

  return (
    <div className="Success">
      <div className="Success-content">
        {buyer.length ? (
          <>
            <h2>{`${buyer.name || "NameBuyer"}, Gracias por tu compra`}</h2>
            <span>{`Tu pedido llegara en 3 dias a tu direccion: ${
              buyer.address || "BuyerAddress"
            }`}</span>
            <div className="Success-map">
              <Map data={location} />
            </div>
          </>
        ) : (
          history.push("/")
        )}
      </div>
    </div>
  );
};

export default Success;
