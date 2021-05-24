import React from 'react'
import {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar';
import Main from '../../components/main/Main';
import Chart from '../../components/charts/Chart'


function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }
  return (
    <div className='container'>
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Main />
      <Chart />
    </div>
  )
}

export default Dashboard
