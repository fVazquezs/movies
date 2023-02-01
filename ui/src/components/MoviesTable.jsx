import React, { useState } from "react";
import { FaEye } from 'react-icons/fa'
import Modal from "./Modal";
import './MoviesTable.css'

export default ({ movies }) => {
    const [movieToShow, setMovieToShow] = useState({})
    const [modalOpen, setModalOpen] = useState(false)

    function openMovieDetails(movie) {
        setMovieToShow(movie)
        setModalOpen(true)
    }
    function closeModal() {
        setMovieToShow({})
        setModalOpen(false)
    }

    return (
        <>
            <table>
                <tr className="header">
                    <th className="ranking">RANKING</th>
                    <th>TITLE</th>
                    <th>YEAR</th>
                    <th>REVENUE</th>
                    <th />
                </tr>
                {
                    movies.map((movie, index) => {
                        return (
                            <tr>
                                <td className="ranking">{index + 1}</td>
                                <td>{movie.title}</td>
                                <td>{movie.year}</td>
                                <td>{movie.revenue}</td>
                                <td className="view" onClick={() => openMovieDetails(movie)}><FaEye /></td>
                            </tr>
                        )
                    })
                }
            </table>
            {modalOpen ? <Modal movie={movieToShow} closeModal={closeModal}/>: null}
        </>
    )
}