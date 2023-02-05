import React, { useState } from "react";
import { FaEye } from 'react-icons/fa'
import { currencyFormatter } from "../core/utils";
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
                <thead>
                    <tr className="header">
                        <th className="ranking">RANKING</th>
                        <th>TITLE</th>
                        <th>YEAR</th>
                        <th>REVENUE</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {   movies.length > 0 ?
                        movies.map((movie, index) => {
                            return (
                                <tr className="table-row" key={index}>
                                    <td className="ranking">{index + 1}</td>
                                    <td>{movie.title}</td>
                                    <td>{movie.year}</td>
                                    <td>{currencyFormatter.format(movie.revenue)}</td>
                                    <td className="view" onClick={() => openMovieDetails(movie)}><FaEye /></td>
                                </tr>
                            )
                        }) : null
                    }
                </tbody>
            </table>
            {modalOpen ? <Modal movie={movieToShow} closeModal={closeModal} /> : null}
        </>
    )
}