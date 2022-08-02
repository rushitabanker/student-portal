import axios from 'axios'
import React,{useState} from 'react'
import './Login.css'

const Login = () => {
    const [user,setUser] = useState({
        email:'',password:''
    })
    const handleChange = (e) => {
        const {name,value} = e.target;
        setUser({...user,[name]:value})
    }
    const handleSubmit = async (e) =>{
        try {
            e.preventDefault();
            //Call server
            await axios.post('/user/login',{...user})
            localStorage.setItem('firstLogin',true);
            user.email==='admin' && user.password==='admin123' ? window.location.href = './admin/tests' : window.location.href = './user/tests'
            
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

return (
    <div className='login_container'>
        <div className='login_form_wrap'>
            <h1 className='login_header'>Login</h1>
            <form>
                <div className='login_form_group'>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' value={user.email} onChange={handleChange}/>
                </div>
                <div className='login_form_group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' value={user.password} onChange={handleChange}/>
                </div>
                <button className='login_btn' type='submit' onClick={handleSubmit}>Login</button>
            </form>
        </div>
        {/* <footer className='login_footer'>
            <p>Don't Have an account ? <Link to='/Register' className='login_footer_link'>Register</Link></p>
        </footer> */}
    </div>
)
}

export default Login