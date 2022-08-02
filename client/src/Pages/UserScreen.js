import React, { useContext } from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar'
import UserContainer from '../Components/UserContainer'
import { GlobalState } from '../GlobalState';
import './UserScreen.css'


const UserScreen = () => {
  const state = useContext(GlobalState)
  const [isLogged] = state.isLogged
  

  return (
    <div className='userScreen'>
      {isLogged ? <>
        <Navbar />
        <div className='userScreenGrid'>
          <Sidebar />
          <UserContainer />  
        </div>   
        </> :
        <h1>Please Log in</h1> 
      }
    </div>
  )
}

export default UserScreen