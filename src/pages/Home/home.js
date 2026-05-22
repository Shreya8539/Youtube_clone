import React from 'react'
import SideNavbar from '../../component/Navbar/SideNavbar/sideNavbar'
import HomePage from '../../component/Navbar/HomePage/homePage'
import './home.css'

const Home = ({sideNavbar}) => {
  return (
    <div className='home'>
      <SideNavbar sideNavbar={sideNavbar}/>
      <HomePage sideNavbar={sideNavbar}/>
    </div>
  )
}

export default Home

