import React from "react";
import '../component/style/Signup.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import google from '../component/images/google_logo.webp';
import facebook from '../component/images/facebook_img.png';
import picture from '../component/images/picture_img.jpeg';

const Signup=()=>{

    const Navigate = useNavigate();
    const loginhandle = () => Navigate('/login')


    // getting a value from an user for that we used to done a useState function
    const[username, setusername] = useState("");
    const[email, setemail] = useState("");
    const[password, setpassword] = useState("");


    const usernameHandle = (e)=>{
        setusername(e.target.value);
    }
    const emailidhandle = (e)=>{
        setemail(e.target.value);
    }
    const passwordidhandle = (e)=>{
        setpassword(e.target.value);
    }
    //  upto this we used to get a value from the user

    //here we used to set a regix for username, email,password
    const checkusername = (username)=>{
        return username.length >= 5;
    }
    const checkemail = (email)=>{
        const emailidpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailidpattern.test(email);
    }
    const checkpassword = (password)=>{
        return password.length >= 8;
    }
    //upto this we used to done a regix for the input tags


    //applying condition for input tags using the form tag
    const signUpSubmitHandler =(e)=>{
        
        e.preventDefault();
        if(checkusername(username)){
            if(checkemail(email)){
                if(checkpassword(password)){
                    console.log(username,email,password);
                    Navigate('/login');
                }
                else{
                    alert("sorry enter the valid password");
                }
            }
            else{
                alert("sorry enter the valid email");
            }
        }
        else{
            alert("enter the valid username")
        }
    }


    return(
        <div className="main-container">
            <form action="" className="form_for_signup" onSubmit={signUpSubmitHandler}>
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

                <div className="buttons_for_userDetails">
                    <label htmlFor="username" className="label_username">Username</label><br />
                    <input type="text" name="username" onChange={usernameHandle} required/><br /><br />

                    <div className="signup_for_email-and-password">
                        <div className="signup_for_emailtag">
                            <label htmlFor="email" className="label_email">Email</label>
                            <input type="email" name="email" onChange={emailidhandle} required/>
                        </div>

                        <div className="sign_for_passwordtag">
                            <label htmlFor="password" className="label_password">Password</label>
                            <input type="password" name="password" onChange={passwordidhandle} required/>
                        </div><br />
                    </div>
                </div>

                <div className="class_for_privacy-policy">
                    <div className="privacy-policy">
                        <input type="checkbox" className="checkbox_for_privacy" required/>
                            <p className="class_content_privacy-poilcy">I’ve read and agree with terms of service and privacy policy.</p>
                    </div>
                </div>

                <div className="div_for_loginpage">
                    <button className="button_signup"><span className="span_for_rightarrow" onClick={signUpSubmitHandler}>&rarr;</span></button>
                </div>

                <div className="login_page_div">
                    <h4 className="h4login_page">Already have an Account!<button className="button_for_login-content" onClick={loginhandle}>Login</button></h4>
                </div>

                <div className="classimage">
                    <img src={picture} alt="main_image" className="image_picture"/>
                </div>

            </form>
        </div>

    )
}
export default Signup