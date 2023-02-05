import React from "react";
import "./ModalFieldDisplayer.css"


export default ({title, text, isLink}) => {


    return (
        <div className="modal-field-displayer">
            <div className="modal-text-display-title">{title}</div>
            <div className={`modal-text-display-text ${isLink ? 'isLink' : '' }`}>{text}</div>
        </div>
    )
}