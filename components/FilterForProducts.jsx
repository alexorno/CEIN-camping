'use client'
import { useState, useRef } from "react"
import React from "react"

export const FilterForProducts = ({filter, setFilter}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [sort, setSort] = useState();
    const sortOptionsDiv = useRef(null);

    return(
        <>
            <img src="/filter-svgrepo-com.svg" height={45} width={45} className="filter-icon" onClick={() => setIsOpen(!isOpen)}/>
            {isOpen && filterOpen(sort, setSort, filter, setFilter, sortOptionsDiv)}
        </>
    )
}

const filterOpen = ( sort, setSort, filter, setFilter, sortOptionsDiv) => {
    
    const handleRadioOption = (event) => {
        if(event.target.value === sort){
            event.target.checked = false;
            setSort('')
        }else{
            setSort(event.target.value)
        }
    }

    const submitFilters = () => {
        setFilter(sort)
    }
    
    const clearFilters = () => {
        for (var item of sortOptionsDiv.current.children) {
            if(item.name === 'sort'){
                item.checked = false;
            }
        }
        setFilter('')
    }

    return(
        <div className="filter-container">

            <div className="filter-options">
                <div className="sort" ref={sortOptionsDiv}>
                    <h3>
                        Sorting
                    </h3>
                    <input type="radio" name="sort" id="sort-option1" value={'ascDate'} onClick={(e)=>handleRadioOption(e)}/>
                    <label htmlFor='sort-option1'>From latest to oldest</label>

                    <input type="radio" name="sort" id="sort-option2" value={'descDate'} onClick={(e)=>handleRadioOption(e)}/>
                    <label htmlFor='sort-option2'>From oldest to latest</label>

                    <input type="radio" name="sort" id="sort-option3" value={'ascPrice'} onClick={(e)=>handleRadioOption(e)}/>
                    <label htmlFor='sort-option3'>From lowest price</label>

                    <input type="radio" name="sort" id="sort-option4" value={'descPrice'} onClick={(e)=>handleRadioOption(e)}/>
                    <label htmlFor='sort-option4'>From highest price</label>
                </div>
            </div>

            <div className="filter-buttons">
                <button className="main-black-btn" onClick={() => clearFilters()}>Clear All</button>
                <button className="main-btn-black-bg" onClick={() => submitFilters()}>Submit</button>
            </div>
        </div>
    )
}
