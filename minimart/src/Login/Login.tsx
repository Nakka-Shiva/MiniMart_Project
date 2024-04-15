import './Login.css'
import background from './../images/bg.jpg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import React from 'react';
import axios from 'axios';
function Login() {
  const [name,setName] = useState('');
  const[password,setPassword] = useState('');

  const navigate = useNavigate();
  const handleSubmit = (e:any) =>{
      e.preventDefault();
      console.log("name--->"+name);
      console.log("password--->"+password);
      axios.get('http://localhost:1437/login?username='+name+"&password="+password)
      .then((res)=>{
          console.log(res.data);
          if(res.data == "success"){
            navigate('/h');
          }
          else{
            navigate('/');
          }

      })
  }

    return <div>
        <div className="container">
    <input type="checkbox" id="flip" />
    <div className="cover">
      <div className="front">
        <img src={background} alt="" />

      </div>
      <div className="back">

      </div>
    </div>
    <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
          <form onSubmit={handleSubmit}>
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your username" onChange={(e) =>{
                            console.log(e.target.value);
                            setName(e.target.value)
                        }

                        }   required />
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" onChange={(e) =>{
                            console.log(e.target.value);
                            setPassword(e.target.value)
                        }

                        }   required />
              </div>
              <div className="text"><a href="#">Forgot password?</a></div>
              <div className="button input-box">
                <input type="submit" value="Sumbit" />
              </div>
              <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
            </div>
        </form>
      </div>
        <div className="signup-form">
          <div className="title">Signup</div>
        <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required />
              </div>
              <div className="button input-box">
                <input type="submit" value="Sumbit" />
              </div>
              <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
            </div>
      </form>
    </div>
    </div>
    </div>
  </div>
  </div>

}
export default Login;