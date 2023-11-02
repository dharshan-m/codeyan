import react from "react";
import '../component/style/Features.css';
import { useNavigate } from 'react-router-dom';

const Features=()=>{

    const Navigate = useNavigate();
    const backtohomebtn = () => Navigate('/home')


    return(
        <div className="class-div-main-container">
            <div className="class-for-heading">
                <h1 className="class-for-heading-about">Features</h1>
                <h1 className=" class-for-heading-logo">Codeyan.</h1>
                <button className="button-for-homebtn" onClick={backtohomebtn}>Back to Home</button>
            </div>

            <div className="class-second-container">
                <div className="div-for-second_container">
                    <div className="div-second-half">
                        <h3 className="heading-inh3-features">Diverse Course Catalog:</h3>
                        <p className="paragraph-for-features">Explore a vast library of courses covering topics from arts and sciences to professional development and beyond.</p>
                    </div>

                    <div className="div-second-half-1">
                        <h3 className="heading-inh3-features">Interactive Learning:</h3>
                        <p className="paragraph-for-features">Engage in interactive lessons, quizzes, assignments, and discussions to enhance your understanding and retention.</p>
                    </div>
                </div>

                <div className="div-for-second-container-2">
                    <div className="div-second-middle">
                        <h3 className="heading-inh3-features">Expert Instructors:</h3>
                        <p className="paragraph-for-features">Learn from experienced instructors who are passionate about sharing their knowledge and expertise.</p>
                    </div>
                </div>

                <div className="div-for-second_container-3">
                    <div className="div-second-last">
                        <h3 className="heading-inh3-features">Certifications:</h3>
                        <p className="paragraph-for-features">Earn certificates upon course completion to showcase your new skills and knowledge.</p>
                    </div>

                    <div className="div-second-half-2">
                        <h3 className="heading-inh3-features">Flexibility:</h3>
                        <p className="paragraph-for-features">Study at your own pace, from anywhere, and on any device. Our platform is designed for your convenience.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features