import React from 'react';
import Alert from 'react-bootstrap/Alert';
export default function PopUpScreen(props) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
}
