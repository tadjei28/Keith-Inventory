import React from 'react'
import "./Navbar.css"

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return(
        <nav className="navbar">

          <div className="nav_icon" onClick={()=>openSidebar}>
             <i className="fa fa-bars">hi</i>
          </div>

          <div className="navbar-left">
             <a href="#">Subscribers</a>
             <a href="#">video</a>
             <a className="active_link" href="#">Admin</a>
          </div>

          <div className="navbar-right">
          <a href="#">
              <i className=" fa fa-search">sera</i>
          </a>

          <a href="#">
              <i className="fa fa-clock-0">sera</i>
          </a>

          <a href="#">
              <i className="image">sera</i>
          </a>
          </div>
        </nav>
    );
};

    

export default Navbar;
