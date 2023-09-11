'use client'
import React, { useEffect, useState } from 'react';
import './Navbar.css'
const Navbar = () => {
   
  
    return (
        <div className='custom-bg'>
          <div className="navbar  fixed sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-5 " >
        <div className=" navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-transparent text-[#025268] rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Service</a></li>
            <li><a>Product</a></li>
            <li><a>Contact</a></li>
            <li><a>Blog</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-end lg:flex hidden">
        <ul className="menu menu-horizontal  px-4 font-bold">
            <li><a className=''>Home</a></li>
            <li><a>Service</a></li>
            <li><a>Product</a></li>
            <li><a>Contact</a></li>
            <li><a>Blog</a></li>
           
          </ul>
          <button className="font-semibold rounded-full px-6 py-3 bg-[#3FBFEB]">HIRE US</button>
        </div>
      </div>
        </div>
         )
};

export default Navbar;
