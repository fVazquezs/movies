import React from "react"
import "./Modal.css"
import ModalFieldDisplayer from "./ModalFieldDisplayer"


export default ({ movie, closeModal }) => {

    console.log("movie to display ", movie)


    return (
        <>
            <div class="modal">

                <div class="modal-header">
                    <button onClick={closeModal}>&times;</button>
                    <p>Some text in the Modal..</p>
                </div>

                <div class="modal-content">
                    <ModalFieldDisplayer title={"Year"} text={movie.year} />
                    <ModalFieldDisplayer title={"Genre"} text={movie.genre} />
                    <ModalFieldDisplayer title={"Description"} text={movie.description} />
                    <ModalFieldDisplayer title={"Director"} text={movie.director} isLink />
                    <ModalFieldDisplayer title={"Actors"} text={movie.actors} isLink />
                    <ModalFieldDisplayer title={"Runtime"} text={movie.runtime} />
                    <ModalFieldDisplayer title={"Rating"} text={movie.rating} />
                    <ModalFieldDisplayer title={"Votes"} text={movie.numberOfVotes} />
                    <ModalFieldDisplayer title={"Revenue"} text={movie.revenue} />
                    <ModalFieldDisplayer title={"Metascore"} text={movie.metascore} />
                </div>

            </div>
        </>
    )
}