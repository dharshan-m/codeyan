import React from "react";
import '../component/style/Login.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import google from '../component/images/google_logo.webp';
import facebook from '../component/images/facebook_img.png';
import picture from '../component/images/picture_img.jpeg';

function Login(){

    const Navigate = useNavigate();
    const SignupHandle = () => Navigate('/signup')

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandle = (e) => {
        setEmail(e.target.value);
    }

    const passHandle = (e) => {
        setPassword(e.target.value);
    }

    const emailChecker=(email)=>{
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email)
    }

    const passwordChecker=(password)=>{
        // const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        // return passwordPattern.test(password);
        return password.length >= 8;
    }

    const formSubmit =(event)=>{
        event.preventDefault();
        if(emailChecker(email)){
            // alert('email valid');
            console.log(email);

            if(passwordChecker(password)){
                Navigate('/home');
            }
            else{
                alert("sorry enter valid password");
            }
        }
        else{
            alert("sorry enter valid email");
        }
    }


    return(
        <div className="main_container">
            <form action="" className="form_class_for_loginpage" id="form_id_for_loginpage" onSubmit={formSubmit}>
                <div className="title_heading">
                    <h1 className="logintitle">Login</h1>
                    <h1 className="logotitle">Codeyan.</h1>
                </div>

                <div className="line2">
                    <hr />
                    <h4 className="using_login">Sign Up with</h4>
                </div>

                <div className="buttons_for_login">
                    <button className="button_google">
                        <img src={google} alt="google_img"  className="google_img"/>
                        Continue With Google
                    </button>

                    <button className="button_for_facebook">
                        <img src={facebook} alt="facebook_img" className="facebook_img"/>
                        Continue With Facebook
                    </button>
                </div>

                <div className="userDetails_buttons">
                    <label htmlFor="email" className="labelemail">Email</label>
                    <input type="email" id="email" onChange={emailHandle}/>

                    <label htmlFor="password" className="labelpassword">Password</label>
                    <input type="password" id="password" onChange={passHandle}/>
                </div>

                <div className="button_for_mainpage">
                    <button className="button_login" onClick={formSubmit}><span>&rarr;</span></button>
                </div>

                <div className="signup_page_div">
                    <h4 className="h4signup_page">Create Account!<button className="button_towards_signup" onClick={SignupHandle}>Sign Up</button></h4>
                </div>

                <div className="classimage">
                    <img src={picture} alt="main_image" className="image_picture"/>
                </div>
            </form>

        </div>
    )
}
export default Login;