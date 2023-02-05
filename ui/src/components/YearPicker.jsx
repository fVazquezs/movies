import React from "react";
import './YearPicker.css';

export default ({ years, onSelectYear }) => {


    return (
        <>
            <div className="background-blur" />
            <div className="dropdown-content">
                <div className="select-year-text" >Select a Year</div>
                {years.map(year => <div className="year-text" key={year} onClick={() => onSelectYear(year)} >{year}</div>)}
            </div>
        </>
    )
}