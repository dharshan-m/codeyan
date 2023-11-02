import react from "react";
import '../component/style/Home.css';
import Navigation from '../component/Nav.jsx';
import { useNavigate } from "react-router-dom";
import google from './images/google_home.png';
import microsoft from './images/microsoft.png';
import shopee from './images/shopee.png';
import slack from './images/slack.png';
import tokopedia from './images/tokopedia.png';
import finalimage from './images/final image.jpg';

const Home=()=>{

    const Navigate = useNavigate();
    // const gotocoursebtn = () => navigate('/course');
    // const gotocourseinwatch = () => Navigate('/course');

    return(
        <>
            <Navigation />
            <div className="main-congtainer">
                <div className="content-div">
                    <div className="div-bigheading">
                        <p className="para-for-bighead">Learning Digital Skills Is Easy and Fun Only Here.</p>
                    </div>

                    <div className="div-second-bighead">
                        <p className="para-for-second-bighead">This is a course that is tailored to the needs of the industry.</p>
                    </div>
                </div>

                <div className="buttons-div">
                    <div className="button-div-1">
                        <button className="Join-now-button" onClick={() => Navigate('/course')}>Join Now</button>
                    </div>

                    <div className="button-div-2">
                        <button className="goto-course-button" onClick={() => Navigate('/course')}>Watch Course</button>
                    </div>
                </div>

                <div className="div-sample-certificate">
                    <p className="para-sample-certificate">View your sample Certificate ! </p>
                </div>

                <div className="div-trusted-companies">
                    <p className="para-trusted-companies">Trusted by more than +100 companies</p>
                </div>

                <div className="div-company-flex">
                    <img src={google} alt="google img" className="googe-company" id="img-logo"/>
                    <img src={microsoft} alt="microsoft img" className="microsoft-company" id="img-logo"/>
                    <img src={shopee} alt="shopee img" className="=shopee-company" id="img-logo"/>
                    <img src={slack} alt="slack img" className="slack-company" id="img-logo"/>
                    <img src={tokopedia} alt="tokopedia img" className="tokopedia-company" id="img-logo"/>
                </div>
                
                <div className="final-image">
                    <img src={finalimage} alt="final-image"  className="imag-tag-final"/>
                </div>
            </div>
        </>
    )
}
export default Home 