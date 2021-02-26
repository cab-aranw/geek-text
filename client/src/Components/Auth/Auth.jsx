import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import axios from 'axios';
import {useHistory} from 'react-router-dom'

// Components


// Page breadcrumb Using the USeStateHook
const pageRoute = [{ title: "Account", link: "/account" }];

const Auth = () => {
  const [showforgotPassword, setShowForgotPassword] = useState(false);

  const [email_signin, setEmailSignin] = useState("");
  const [password_login, setPasswordLogin] = useState("");

  const [username_signup, setUsernameSignUp] = useState("");
  const [email_signup, setEmailSignup] = useState("");
  const [password_signup, setPasswordSignup] = useState("");
  const [firstname_signup, setFirstNameSignup] = useState("")

  const history = useHistory()

  const handleLoginChange = (e)=>{
    switch(e.target.id){
      case "email_signin":
        setEmailSignin(e.target.value);
        break;
      case "password_login":
        setPasswordLogin(e.target.value);
        break
      default:
        break;
    }
  }

  const handleSignupChange = (e)=>{
    switch(e.target.id){
      case "username_signup":
        setUsernameSignUp(e.target.value);
        break;
      case "password_signup":
        setPasswordSignup(e.target.value);
        break
      case "email_signup":
        setEmailSignup(e.target.value)
        break;
      case "firstname_signup":
        setFirstNameSignup(e.target.value)

      default:
        break;
    }
  }

  const LoginUser = (e)=>{
    const baseURL = {
      dev:'http://localhost:3000/api/signin',
      prod:''
    }
    const url = process.env.NODE_ENV === "production" ? baseURL.prod : baseURL.dev
    e.preventDefault();
    const form_data = new FormData();
    form_data.append('email', email_signin);
    form_data.append('password', password_login);

    axios.post(url, form_data).then(res=>{
      localStorage.setItem('token', res.data.token);
      history.push('/');
      window.location.reload(false)
    }).catch(err=>{
      alert(err.response.data.msg)
    })

  }

  const SignupUser = (e)=>{
    e.preventDefault();
    const baseURL = {
      dev:'http://localhost:3000/api/signup',
      prod:''
    }
    const url = process.env.NODE_ENV === "production" ? baseURL.prod : baseURL.dev


    // email, name, nickname, password are required
    // The nickname will be the same as the username
    const form_data = new FormData();
    form_data.append('email', email_signup);
    form_data.append('password', password_signup);
    form_data.append('nickname', username_signup)
    form_data.append('name', firstname_signup)
    axios.post(url, form_data).then(res=>{
      alert(res.data.msg)
    }).catch(err=>{
      alert(err.response.data.msg)
    })

  }

  return (
    <div className="account">
      <div className="customer_container row">
        <div className="col-1-2">
          {!showforgotPassword ? (
            <form className="account__form">
              <h3 className="account__form-header">Login</h3>
              <p>Welcome back Sigin in to your account</p>
              <div className="form-control">
                <label htmlFor="email_signin">Email</label>
                <input onChange={handleLoginChange} id="email_signin" type="text" required  />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  required
                  id="password_login"
                  autoComplete="true"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="account__forgotpassword">
                <Link to="/">Return to Store</Link>
                <button className="auth" onClick={() => setShowForgotPassword(true)}>
                  Forgotten Password?
                </button>
              </div>
              <button onClick={LoginUser} type="submit" className="btn btn-primary auth">
                Login
              </button>
            </form>
          ) : (
            <form className="account__form">
              <h3 className="account__form-header">Reset Password</h3>
              <p>We will send you an email to reset your password</p>
              <div className="form-control">
                <label htmlFor="email">Email Address</label>
                <input type="email" required id="email" />
              </div>
              <div className="account__forgotpassword-buttons">
                <button type="submit" className="btn btn-primary auth">
                  Submit
                </button>
                <button
                  onClick={() => setShowForgotPassword(false)}
                  className="btn btn-light auth"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="col-1-2 form-divider">
          <form className="account__form">
            <h3 className="account__form-header">Create New Account</h3>
            <p>Create your own Account</p>
            <div className="form-control">
              <label  htmlFor="name">First Name</label>
              <input style={{marginBottom:'1rem'}} onChange={handleSignupChange} id="firstname_signup" type="text" required  />
              <label htmlFor="name">Username</label>
              <input onChange={handleSignupChange} id="username_signup" type="text" required  />
            </div>
            <div className="form-control">
              <label htmlFor="register-email">Email Address</label>
              <input type="email" required id="email_signup"  onChange={handleSignupChange}/>
            </div>
            <div className="form-control">
              <label htmlFor="register-password">Password</label>
              <input
                type="password"
                required
                id="password_signup"
                autoComplete="true"
                onChange={handleSignupChange}
              />
            </div>
            <button onClick={SignupUser} type="submit" className="btn btn-primary auth">
              Register
            </button>
          </form>
          <div className="account__subtext">
            <h4>Sign up today and you'll be able to:</h4>
            <p>
              <i className="fas fa-check"></i>
              <span>Speed your way through the checkout</span>
            </p>
            <p>
              <i className="fas fa-check"></i>
              <span>Track your orders easily</span>
            </p>
            <p>
              <i className="fas fa-check"></i>
              <span>Keep a record all your purchases</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
