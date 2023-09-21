import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <>
      <div className="card">
        <div className="contcard">
          <div className="card-body">
            <h5 className="card-title">{props.nombre},{props.numero} {props.mes}</h5>
          </div>
          <div className="img">
            <img src={props.img} className="card-img-top" alt="..." />
          </div>

          <div className="card-body">
            <p className="card-text">{props.dataDiasmax}<p id="nomenc">°C</p></p>
            <p className="card-text2">{props.dataDiasmin}<p id="nomenc">°C</p></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
