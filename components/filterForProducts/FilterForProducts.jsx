'use client'
import { useState, useRef } from "react"
import React from "react";
import styles from "./filterForProducts.module.css";

export const FilterForProducts = ({filter, setFilter}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [sort, setSort] = useState();
    const sortOptionsDiv = useRef(null);

    return(
        <>
            <img src="/filter-svgrepo-com.svg" height={45} width={45} className={styles.filterIcon} onClick={() => setIsOpen(!isOpen)}/>
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

    
    const clearFilters = () => {
        for (var item of sortOptionsDiv.current.children) {
            if(item.name === 'sort'){
                item.checked = false;
            }
        }
        setFilter('')
    }

    return(
        <div className={styles.container}>

            <div className={styles.options}>
                <div className={styles.sort} ref={sortOptionsDiv}>
                    <h3>
                        Sorting
                    </h3>
                    <input type="radio" name="sort" id="sort-option1" value={'descDate'} onClick={(e)=>handleRadioOption(e)}/>
                    <label htmlFor='sort-option1'>From latest to oldest</label>

                    <input type="radio" name="sort" id="sort-option2" value={'ascDate'} onClick={(e)=>handleRadioOption(e)}/>
                    <label htmlFor='sort-option2'>From oldest to latest</label>

                    <input type="radio" name="sort" id="sort-option3" value={'ascPrice'} onClick={(e)=>handleRadioOption(e)}/>
                    <label htmlFor='sort-option3'>From lowest price</label>

                    <input type="radio" name="sort" id="sort-option4" value={'descPrice'} onClick={(e)=>handleRadioOption(e)}/>
                    <label htmlFor='sort-option4'>From highest price</label>

                    <input type="radio" name="sort" id="sort-option5" value={'ascPopularity'} onClick={(e)=>handleRadioOption(e)}/>
                    <label htmlFor='sort-option5'>From least popular</label>

                    <input type="radio" name="sort" id="sort-option6" value={'descPopularity'} onClick={(e)=>handleRadioOption(e)}/>
                    <label htmlFor='sort-option6'>From most popular</label>
                </div>
            </div>

            <div className={styles.buttons}>
                <button className="main-black-btn" onClick={() => clearFilters()}>Clear All</button>
                <button className="main-btn-black-bg" onClick={() => setFilter(sort)}>Submit</button>
            </div>
        </div>
    )
}

