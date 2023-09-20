import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <>
      <div className="card">
        <div className="contcard">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
          <div className="img">
            <img src={props.img} className="card-img-top" alt="..." />
          </div>

          <div className="card-body">
            <p className="card-text">{props.dataDiasmax}°C {props.dataDiasmin}°C</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
