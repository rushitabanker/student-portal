
import React, { useContext} from 'react'
import { GlobalState } from '../GlobalState'
import Marks from './Marks'
import Register from './Register'
import Test from './Test'
import TestAdmin from './TestAdmin'
import Syllabus from './Syllabus'
import Schedule from './Schedule'
import Fees from './Fees'
import './UserContainer.css'

const UserContainer = () => {
  const state = useContext(GlobalState)
  const [option,setOption] = state.option
  const [subject] = state.subject
  const [isAdmin] = state.isAdmin

  return (
    <>
    
        <div className='userContainer' style={{flex:'1'}}>
          <div className="user-container-option">
            <h4>{option}</h4>
          </div>
          {/* Admin */}
          {isAdmin ? 
          option==='Register' ? <Register /> : <TestAdmin /> 
          : 
          option==='Syllabus' ? <Syllabus /> :
          option==='Schedule' ? <Schedule /> : 
          option==='Fees' ? <Fees /> : <Test />  }
        </div>
    </>
  )
}

export default UserContainer