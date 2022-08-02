import React, { useState } from 'react'
import './Register.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [user,setUser] = useState({
    firstname:'',lastname:'',email:'',std:'',medium:'',board:'',sub:[],school:'',gender:'',dob:'',add:'',contact1:'',contact2:'',password:'',
  })
  


  const handleChange = (e) => {
    const {name,value} = e.target;
    setUser({...user,[name]:value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    //password generate
    const randomPassword = Math.random().toString(36).slice(2)
    console.log(randomPassword);
    setUser({...user,password:randomPassword})   

    try {
      await axios.post('/user/register',{...user})
    } catch (err) {
      alert(err.response.data.msg)
    }
  }
  return (
    <section>
      <div className='register_Container'>
        <h3 className='register_h3'>Register</h3>
        <div className='register_Form'>
          <div className='register_fromControl'>
            <label htmlFor="firstname" className='register_label'>First Name</label>
            <input type="text" className='register_input' name='firstname' value={user.firstname} onChange={handleChange} />
          </div>

          <div className='register_fromControl'>
            <label htmlFor="lastname" className='register_label'>Last Name</label>
            <input type="text" className='register_input' name='lastname' value={user.lastname} onChange={handleChange} />
          </div>

          <div className='register_fromControl'>
            <label htmlFor="email" className='register_label'>Email</label>
            <input type="text" className='register_input' name='email' value={user.email} onChange={handleChange} />
          </div>

          <div className='register_fromControl'>
            <label htmlFor="standard" className='register_label'>Standard</label>
            <input type="text" className='register_input' name='std' value={user.std} onChange={handleChange} />
          </div>

          <div className='register_fromControl'>
            <label htmlFor="medium" className='register_label'>Medium</label>
            <input type="text" className='register_input' name='medium' value={user.medium} onChange={handleChange} />
          </div>
          <div className='register_fromControl'>
            <label htmlFor="board" className='register_label'>Board</label>
            <input type="text" className='register_input' name='board' value={user.board} onChange={handleChange} />
          </div>
          <div className='register_fromControl'>
            <label htmlFor="school" className='register_label'>School</label>
            <input type="text" className='register_input' name='school' value={user.school} onChange={handleChange} />
          </div>
          <div className='register_fromControl'>
            <label htmlFor="gender" className='register_label'>Gender</label>
            <input type="text" className='register_input' name='gender' value={user.gender} onChange={handleChange} />
          </div>
          <div className='register_fromControl'>
            <label htmlFor="dob" className='register_label'>Date of Birth</label>
            <input type="date" className='register_input' name='dob' value={user.dob} onChange={handleChange} />
          </div>
          <div className='register_fromControl'>
            <label htmlFor="contact1" className='register_label'>Mobile Number</label>
            <input type="text" className='register_input' name='contact1' value={user.contact1} onChange={handleChange} />
          </div>
          <div className='register_fromControl'>
            <label htmlFor="contact2" className='register_label'>Parents' Number (optional)</label>
            <input type="text" className='register_input' name='contact2' value={user.contact2} onChange={handleChange} />
          </div>
          <div className='register_fromControl'>
            <label htmlFor="add" className='register_label'>Address</label>
            <textarea type="text" className='register_textarea' name='add' value={user.add} onChange={handleChange} />
          </div>
        </div>
        <div className='register_footer'>
            <button className='register_btn' onClick={handleSubmit}>Submit</button>
          </div>
      </div>
    </section>
  )
}

export default Register


