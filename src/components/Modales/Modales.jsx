import React from "react";
import "./Modales.css";
import Modal from "react-bootstrap/Modal";
function Modales(props) {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        dialogClassName="modal-250w"
        aria-labelledby="example-custom-modal-styling-title"
        fullscreen={true}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form onSubmit={props.submit}>
            <div id="form">
            <input type="text" id="inputCiudad"className="form-control"  aria-label="readonly input example" ></input>
            <button type="submit" className="btn btn-primary mb-3">Search</button>
            </div>

          </form>
          <div id="selector">
          <input id="esmeraldas"
            type="button"
            value="Esmeraldas"
            readOnly
            onClick={props.click}
          />
          <input id="guayaquil"
            type="button"
            value="Guayaquil"
            readOnly
            onClick={props.click}
          />
          </div>
          
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modales;
