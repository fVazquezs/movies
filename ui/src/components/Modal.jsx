import React from "react"
import {currencyFormatter} from "../core/utils"
import "./Modal.css"
import ModalFieldDisplayer from "./ModalFieldDisplayer"


export default ({ movie, closeModal }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="title-close-container">
                        <div className="modal-movie-title">{movie.title}</div>
                        <button className="modal-close-container" onClick={closeModal}>
                            <div className="close-modal-times" />
                            <div className="close-modal-text">CLOSE</div>
                        </button>
                    </div>
                    <div className="title-underline" />
                </div>
                <ModalFieldDisplayer title={"Year"} text={movie.year} />
                <ModalFieldDisplayer title={"Genre"} text={movie.genre} />
                <ModalFieldDisplayer title={"Description"} text={movie.description} />
                <div className="director-actors-container">
                    <ModalFieldDisplayer title={"Director"} text={movie.director} isLink />
                    <ModalFieldDisplayer title={"Actors"} text={movie.actors} isLink />
                </div>
                <ModalFieldDisplayer title={"Runtime"} text={movie.runtime} />
                <ModalFieldDisplayer title={"Rating"} text={movie.rating} />
                <ModalFieldDisplayer title={"Votes"} text={movie.numberOfVotes} />
                <ModalFieldDisplayer title={"Revenue"} text={currencyFormatter.format(movie.revenue)} />
                <ModalFieldDisplayer title={"Metascore"} text={movie.metascore} />
            </div>
        </div>
    )
}