import { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';
import './login.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function SignUp()
{
    const history = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleBackClick = () => {
        history('/');
      };

    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://localhost:8080/signup/', {username, email, password})
        .then(res=>{
          const info = {
            "firstname": "Sourav",
            "lastname": "K",
            "email": "mail@gmail.com",
            "phone": "9996677",
            "address": "abc house, kannur"

          };
          const usernotes = []
          console.log(usernotes)
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
            alert('invalid')
            history('/')
    })

    }
    return(
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-box">
              <input type="text" className="form-control" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)}/>
              <FaUser className="icon"/>
            </div>
            <div className="input-box">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <IoIosMail className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="icon"/>
            </div>

            <button type="submit">
              SignUp
            </button>
            <div className="register-link">
              <p>Already have an account? <a href="" onClick={handleBackClick}>Login</a></p>
          </div>
          </form>
        </div>

    )
}

export default SignUp
