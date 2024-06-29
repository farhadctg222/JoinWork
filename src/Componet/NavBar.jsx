import React from 'react';
import { Link } from 'react-router-dom';

const navLink = <>

<Link to='/home'><li>Home</li></Link>
<Link to='/service'><li>Service</li></Link>
<Link to='/staff'><li>Staff</li></Link>
<Link to='/other'><li>Other</li></Link>


        </>

const NavBar = () => {
    return (
        <div>
           <div className="navbar bg-[#02858a55]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navLink
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Join Work</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
     
      <li><a>Service</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-success">Donation Now</a>
  </div>
</div>
        </div>
    );
};

export default NavBar;