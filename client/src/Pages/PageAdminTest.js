import React, { useContext } from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar'
import TestAdmin from '../Components/TestAdmin';
import { GlobalState } from '../GlobalState';
import './UserScreen.css'

const PageAdminTest = () => {
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
              <h4>Test</h4>
            </div>
            <TestAdmin />  
          </div>
        </div>   
        </> :
        <h1>Please Log in</h1> 
      }
    </div>
  )
}


export default PageAdminTest