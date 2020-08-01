import React from 'react'
import './Modal.css'

export default props => {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {props.children}
        <button onClick={props.handleClose}>close</button>
    </section>
    </div>
  );
};