import React, { useRef, useState, useEffect, useMemo } from "react";
import { FaEye } from "react-icons/fa";
import { currencyFormatter } from "../core/utils";


export default (movie, index, shouldObserve, openMovieDetails) => {

    const ref1 = useRef(null)
    if (shouldObserve){
        console.log("should observe", shouldObserve)

        const isInViewport1 = useIsInViewport(ref1);
        console.log('isInViewport1: ', isInViewport1);
    }
    return (
        <tr className="table-row" key={index} ref={shouldObserve ? ref1 : null}>
            <td className="ranking">{index + 1}</td>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{currencyFormatter.format(movie.revenue)}</td>
            <td className="view" onClick={() => openMovieDetails(movie)}><FaEye /></td>
        </tr>
    )
}


function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(([entry]) =>
                setIsIntersecting(entry.isIntersecting),
            ),
        [],
    );

    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);

    return isIntersecting;
}