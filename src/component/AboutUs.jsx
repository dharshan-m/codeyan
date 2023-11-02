import react from "react";
import '../component/style/AboutUs.css';
import { useNavigate } from 'react-router-dom';

const AboutUs=()=>{


    const Navigate = useNavigate();
    const backtohomebtn = () => Navigate('/home')


    return(
        <div className="main-container-for-aboutus">
            <div className="class-for-heading">
                <h1 className="class-for-heading-about">About Us</h1>
                <h1 className=" class-for-heading-logo">Codeyan.</h1>
                <button className="button-for-homebtn" onClick={backtohomebtn}>Back to Home</button>
            </div>

            <div className="div-for-paragraph">
                <div className="div-paragraph1">
                    <p className="para-for-1">Welcome to Codeyan, where knowledge meets innovation! We are a passionate team dedicated to transforming online education and making learning accessible to all. Our mission is to empower learners worldwide by providing a seamless, engaging, and effective online learning experience.</p>
                </div>

                <div className="paragrph-div-for-2">
                    <div className="heading-for-para2">
                        <h4 className="h4-for-heading">Who We Are:</h4>
                    </div>

                    <div className="para-div-for-2">
                        <p className="para-for-2">At Codeyan, we believe that education is the key to personal and professional growth. We are a group of educators, tech enthusiasts, and creatives who came together with a common goal – to revolutionize the way people learn.</p>
                    </div>
                </div>

                <div className="paragraph-div-for-3">
                    <div className="heading-for-para3">
                        <h4 className="h4-for-heading-2">What We Do:</h4>
                    </div>

                    <div className="para-div-for-3">
                        <p className="para-for-3">Our online course web application is designed to cater to the diverse needs of learners, educators, and organizations. We offer a platform where instructors can create and deliver engaging courses, students can explore a wide range of subjects, and businesses can upskill their workforce. We're here to bridge the gap between knowledge seekers and knowledge providers.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs
