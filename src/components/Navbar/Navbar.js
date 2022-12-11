import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from './NavbarStyle'

const Navbar = () => {
  return (
    <NavBar>
      <Link to='/'>
        <h1>Movies</h1>
      </Link>
      {/* <div>
        <Link to='/'>
          <h3>Home</h3>
        </Link>
      </div> */}
    </NavBar>
  )
}

export default Navbar
