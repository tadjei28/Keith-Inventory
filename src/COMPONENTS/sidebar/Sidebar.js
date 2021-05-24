import React from 'react'
import './Sidebar.css'

function Sidebar({sidebarOpen, closeSidebar}) {
    return (
        <div className={sidebarOpen? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-image">
                    image
                    <h1>Keith</h1>
                </div>

                <i className="fa-times" id="sidebarIcon" onClick={()=>closeSidebar()}></i>

            </div>

            <div className="sidebar-menu">
                <div className="sidebar-link active-menu-link">
                    <i className="fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                <h2>MNG</h2>
                <div className="sidebar-link">
                    <i className="fa-user"></i>
                    <a href="#">Admin Management</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa-sale"></i>
                    <a href="#">Sales</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa-purch"></i>
                    <a href="#">Purchases</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa-Order"></i>
                    <a href="#">Orders</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa-records"></i>
                    <a href="#">Records</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa-goods"></i>
                    <a href="#">Products</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa-items"></i>
                    <a href="#">Inventory</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa-user"></i>
                    <a href="#">Admin Management</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa-user"></i>
                    <a href="#">Admin Management</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa-user"></i>
                    <a href="#">Admin Management</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa-user"></i>
                    <a href="#">Admin Management</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa-user"></i>
                    <a href="#">Admin Management</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa-user"></i>
                    <a href="#">Admin Management</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa-user"></i>
                    <a href="#">Admin Management</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa-user"></i>
                    <a href="#">Admin Management</a>
                </div>

            </div>
            
        </div>
    )
}

export default Sidebar
