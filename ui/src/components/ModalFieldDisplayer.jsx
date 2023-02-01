import React from "react";
import "./ModalFieldDisplayer.css"


export default ({title, text, isLink}) => {


    return (
        <>
            <p className="modal-text-display-title">{title}</p>
            <p className={`modal-text-display-text ${isLink ? 'isLink' : '' }`}>{text}</p>
        </>
    )
}