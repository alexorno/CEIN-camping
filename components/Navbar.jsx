import React from "react";
// import Link from "next/link";


export const Navbar = () => {


    return (
        <nav className="navbar-container" >
            <div className="main-container">
                <div className="logo">
                    <img src='/Logo.svg' />
                </div>
                <div className="">
                    <button>shop</button>
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