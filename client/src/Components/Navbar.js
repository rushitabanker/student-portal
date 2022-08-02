import React, { useContext } from 'react'
import './Navbar.css'
import {FaBars} from 'react-icons/fa'
import { GlobalState } from '../GlobalState'

const Navbar = () => {
  const state = useContext(GlobalState)
  const openSidebar = state.openSidebar
  const closeSidebar = state.closeSidebar
  const [isSidebar] = state.isSidebar
  const [subject,setSubject] = state.subject
  const handleClick = (e) => {
    e.preventDefault()
    {isSidebar ? closeSidebar() : openSidebar()}
  }
  const handleChange = (e) => {
    // e.preventDefault()
    
    setSubject(e.target.value)
    // console.log(e.target.value);
  }
  return (
    <>
    <nav className="nav navbar-fixed">
      <div className="nav-center">
        {/* nav-header */}
        <div className="nav-header">
          {/* <h4>Thakar Tutorials</h4> */}
          <h4>TT</h4>
          <div className="nav-subject">
            <label htmlFor="" className='navLabel'>Subject</label>
            <select value={subject} className='nav-select' onChange={handleChange}>
              <option value="All">All</option>
              <option value="English">English</option>
              <option value="SS">SS</option>
              <option value="Maths">Maths</option>
              <option value="Science">Science</option>
            </select>
          </div>
          <button className="nav-btn" onClick={handleClick}>
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
    <div className="navbar-setting" style={{height:"5rem",width:"100%"}}></div>
    </>
  )
}

export default Navbar