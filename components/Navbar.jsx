'use client';
import React, { useEffect, useState, useRef, forwardRef } from "react";
import Link from "next/link";


export const Navbar = () => {
    const [showCategory, setShowCategory] = useState(false);
    const category = useRef(null);
    const categoryBtn = useRef(null);
    // ref to have current state, not initial
    const showCategoryRef = useRef(showCategory)
    useEffect(() => {
      showCategoryRef.current = showCategory;
    }, [showCategory])
    // click outside element to close it
    useEffect(() => {
        function handleClickOutside(event) {
            if (showCategoryRef.current && category.current && !category.current.contains(event.target) && !categoryBtn.current.contains(event.target)) {
                setShowCategory(false)
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [category]);
    
    

    return (
        <nav className="navbar-container" >
            <div className="main-container">
                <div className="logo">
                    <Link href='/'>
                        <img src='/Logo.svg' />
                    </Link>
                </div>
                <div className="">
                    {/* <Link href='/products'>shop</Link> */}
                    <button onClick={() => setShowCategory(true)} ref={categoryBtn}>Shop</button>
                    {showCategory ? <CategoriesList ref={category} closeCategory={() => setShowCategory(false)}/> : <></>}
                    <button>events</button>
                    <button>collections</button>
                    <button>journal</button>
                </div>
                <div>
                    <button>search</button>
                    <button>login</button>
                </div>
            </div>
        </nav>
    )
}

const CategoriesList = forwardRef(function MyInput(props, ref) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('/api/getCategories')
          .then((res) => res.json())
          .then((data) => {
            setCategories(data)
          })
      }, [])

    return (
        <div className="nav-categories" ref={ref}>
            {categories.map((category) => {
                return (
                    <div className="nav-category" key={category.id}>
                        <Link href={'/categories/' + category.id}>
                        <img src={category.image} />
                        <p>{category.name}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
});