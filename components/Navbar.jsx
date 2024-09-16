'use client';
import React, { useEffect, useState, useRef, forwardRef } from "react";
import Link from "next/link";
import {useStateContext} from "../context/StateContext";
import Cart from "./Cart";


export const Navbar = () => {
    const [showCategory, setShowCategory] = useState(false);
    const category = useRef(null);
    const categoryBtn = useRef(null);
    const {showCart, setShowCart, totalQuantities} = useStateContext();
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
                    <button onClick={() => setShowCategory(!showCategory)} ref={categoryBtn}>Shop</button>
                    {showCategory ? <CategoriesList ref={category} closeCategory={() => setShowCategory(false)} /> : <></>}
                    <Link href={`/events`}>
                        <button>events</button>
                    </Link>
                    <Link href={`/collections`}>
                        <button>collections</button>
                    </Link>
                    <Link href={`/journal`}>
                        <button>journal</button>
                    </Link>
                </div>
                <div>
                    <button>search</button>
                    <Link href={'/dashboard'}>
                        <button>login</button>
                    </Link>
                    <button className="cart-button" onClick={() => setShowCart(!showCart)}>
                        {totalQuantities === 0 ? 
                        <img src="/shopping-cart-outline-svgrepo-com.svg" height={20} width={20}/> 
                        : 
                        totalQuantities}
                    </button>
                    {showCart ? <Cart /> : ''}
                </div>
            </div>
        </nav>
    )
}

const CategoriesList = forwardRef(function MyInput(props, ref) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('/api/getCategories',{
            cache: "force-cache",
        })
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
            <div className="nav-category">
                <Link href={'/products'}>
                    <img src={'/outdoor-trip-navigation-svgrepo-com.svg'} />
                    <p>All products</p>
                </Link>
            </div>
        </div>
    )
});