import React from "react";

function Modal(props) {
  return (
    <>
      <form onSubmit={props.submit}>
        <input type="text" id="inputCiudad" />
        <button type="submit">Search</button>
      </form>
      <input type="button" value="esmeraldas" readOnly onClick={props.click} />
      <input type="text" value="guayaquil" readOnly onClick={props.click} />
    </>
  );
}

export default Modal;
