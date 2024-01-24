import { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';
import './login.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Login()
{
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUpClick() {
    history('/signup');
  }

    function handleSubmit(event){
        event.preventDefault()
        
        axios.post('http://localhost:8080/login/', {email, password})
        .then(res=>{
          const info = {
            "firstname": "Sourav",
            "lastname": "K",
            "email": "mail@gmail.com",
            "phone": "9996677",
            "address": "abc house, kannur"

          };
          
          const usernotes = res.data
            if(res.status==200) 
            {
                history('/home',{replace:true,state:{email,password,usernotes,info}});
            }
            else if(res.data=='notsuccess')
            {
                alert('invalid details')
                history('/')
            }
        })
        .catch(err=>{
            alert('invalid details')
            history('/')
    })




    }
    return(
      <div className="wrapper">
      <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <IoIosMail className="icon" />
          </div>
          <div className="input-box">
            <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <FaLock className="icon"/>
          </div>
          <div className="remember-forgot">
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
              <p>Don't have an account? <a href="" onClick={handleSignUpClick}>Register</a></p>
          </div>
        </form>
    </div>
    )
}

export default Login
