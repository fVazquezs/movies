import React, { useState, useRef, useEffect } from "react";
import { FaEye } from 'react-icons/fa'
import { useIsVisible } from "../core/useIsVisibleHook";
import { currencyFormatter } from "../core/utils";
import Modal from "./Modal";
import './MoviesTable.css'

export default ({ movies, lastIndexToShow }) => {
    const [movieToShow, setMovieToShow] = useState({})
    const [modalOpen, setModalOpen] = useState(false)

    const listInnerRef = useRef();

    const isVisible = useIsVisible(listInnerRef)

    // useEffect(() => {
    //     if (isVisible) {
    //         onEndOfListIsInView()
    //     }
    //    console.log("component is visible ", isVisible) 
    // },[isVisible])

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
            <table >
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
                    {movies.length > 0 ?
                        movies.map((movie, index) => {
                            return lastIndexToShow > index ? (
                                <tr className="table-row" key={index}>
                                    <td className="ranking">{index + 1}</td>
                                    <td>{movie.title}</td>
                                    <td>{movie.year}</td>
                                    <td>{currencyFormatter.format(movie.revenue)}</td>
                                    <td className="view" onClick={() => openMovieDetails(movie)}><FaEye /></td>
                                </tr>
                            ) : null
                        }) : null
                    }
                </tbody>
            </table>
            <div ref={listInnerRef} className="end-of-table" />
            {modalOpen ? <Modal movie={movieToShow} closeModal={closeModal} /> : null}
        </>
    )
}

