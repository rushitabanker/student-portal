import React, { useContext } from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar'
import Register from '../Components/Register';
import { GlobalState } from '../GlobalState';
import './UserScreen.css'

const PageAdminRegister = () => {
  const state = useContext(GlobalState)
  const [isLogged] = state.isLogged
  

  return (
    <div className='userScreen'>
      {isLogged ? <>
        <Navbar />
        <div className='userScreenGrid'>
          <Sidebar />
          <div className='userContainer' style={{flex:'1'}}>
            <div className="user-container-option">
              <h4>Register</h4>
            </div>
            <Register />  
          </div>
        </div>   
        </> :
        <h1>Please Log in</h1> 
      }
    </div>
  )
}

export default PageAdminRegister