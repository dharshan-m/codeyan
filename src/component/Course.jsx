import react from "react";
import './style/Course.css';
import {useNavigate} from 'react-router-dom';

import java from './images/java.jpeg';
import javascript from './images/javascript.jpeg';
import html from './images/html.jpeg';
import css from './images/css.jpeg';
import reactjs from './images/react.jpeg';
import sql from './images/sql.jpeg';
import python from './images/python.jpeg';
import cplus from './images/c++.jpeg';
import c from './images/c language.png';


const Course=()=>{

    const Navigate = useNavigate();
    const backtohomebtnincourse =()=> Navigate('/home');


    return(
        <div className="div-main-container">
            <div className="div-logo">
                <h1 className="heading-course-logo">
                    Codeyan.
                </h1>
            </div>

            <div className="div-flex-row">
                <h1 className="heading1-for-course">Online Course</h1>
                <input type="search" placeholder="Search Course" className="button-for-search"/>
                <button className="button-back-to-home" onClick={backtohomebtnincourse}>Back to home</button>
            </div>
            
            <div className="div-for-courselist">
                <div className="divfor-java">
                    <img src={java} alt="java img" className="image-head" />
                    <div className="div-course-name">
                        <h4 className="h4-course-name">Java</h4>
                        <h5 className="h5-duration">58 hrs</h5>
                    </div>

                    <div className="div-author-cost">
                        <h4 className="h4-author-name">By: Herbert Schildt</h4>
                        <h5 className="h5-cost">Cost: $3.6</h5>
                    </div>

                    <div className="div-beginbtn">
                        <button className="let's-begin-button">Let's Begin</button>
                    </div>
                </div>

                <div className="divfor-javascript">
                    <img src={javascript} alt="javascript img" className="image-head"/>
                    <div className="div-course-name">
                        <h4 className="h4-course-name">JavaScript</h4>
                        <h5 className="h5-duration">75 hrs</h5>
                    </div>

                    <div className="div-author-cost">
                        <h4 className="h4-author-name">By: Jonas schmedtmann</h4>
                        <h5 className="h5-cost">Cost: $88.19</h5>
                    </div>

                    <div className="div-beginbtn">
                        <button className="let's-begin-button">Let's Begin</button>
                    </div>
                </div>

                <div className="divfor-css">
                    <img src={css} alt="css img" className="image-head" />
                    <div className="div-course-name">
                        <h4 className="h4-course-name">CSS 3</h4>
                        <h5 className="h5-duration">7 hrs</h5>
                    </div>

                    <div className="div-author-cost">
                        <h4 className="h4-author-name">By: Manuel Lorenz</h4>
                        <h5 className="h5-cost">Cost: $8.42</h5>
                    </div>

                    <div className="div-beginbtn">
                        <button className="let's-begin-button">Let's Begin</button>
                    </div>
                </div>

                <div className="divfor-html">
                    <img src={html} alt="html img" className="image-head" />
                    <div className="div-course-name">
                        <h4 className="h4-course-name">HTML 5</h4>
                        <h5 className="h5-duration">4 hrs</h5>
                    </div>

                    <div className="div-author-cost">
                        <h4 className="h4-author-name">By: Colt Steele</h4>
                        <h5 className="h5-cost">Cost: $3.61</h5>
                    </div>

                    <div className="div-beginbtn">
                        <button className="let's-begin-button">Let's Begin</button>
                    </div>
                </div>

                <div className="divfor-react">
                    <img src={reactjs} alt="react img" className="image-head" />
                    <div className="div-course-name">
                        <h4 className="h4-course-name">React js</h4>
                        <h5 className="h5-duration">53 hrs</h5>
                    </div>

                    <div className="div-author-cost">
                        <h4 className="h4-author-name">By: Jonas schmedtmann </h4>
                        <h5 className="h5-cost">Cost: $12.03</h5>
                    </div>

                    <div className="div-beginbtn">
                        <button className="let's-begin-button">Let's Begin</button>
                    </div>
                </div>

                <div className="divfor-sql">
                    <img src={sql} alt="sql img" className="image-head" />
                    <div className="div-course-name">
                        <h4 className="h4-course-name">SQL</h4>
                        <h5 className="h5-duration">10 hrs</h5>
                    </div>

                    <div className="div-author-cost">
                        <h4 className="h4-author-name">By: Josh Portilla</h4>
                        <h5 className="h5-cost">Cost: $6.01</h5>
                    </div>

                    <div className="div-beginbtn">
                        <button className="let's-begin-button">Let's Begin</button>
                    </div>
                </div>

                <div className="divfor-python">
                    <img src={python} alt="python img" className="image-head" />
                    <div className="div-course-name">
                        <h4 className="h4-course-name">Python</h4>
                        <h5 className="h5-duration">40 hrs</h5>
                    </div>

                    <div className="div-author-cost">
                        <h4 className="h4-author-name">By: Josh Portilla</h4>
                        <h5 className="h5-cost">Cost: $18.04</h5>
                    </div>

                    <div className="div-beginbtn">
                        <button className="let's-begin-button">Let's Begin</button>
                    </div>
                </div>

                <div className="divfor-cplusplus">
                    <img src={cplus} alt=" c++ img" className="image-head" />
                    <div className="div-course-name">
                        <h4 className="h4-course-name">C++</h4>
                        <h5 className="h5-duration">60 hrs</h5>
                    </div>

                    <div className="div-author-cost">
                        <h4 className="h4-author-name">By: Abdul Bari  </h4>
                        <h5 className="h5-cost">Cost: $24.06</h5>
                    </div>

                    <div className="div-beginbtn">
                        <button className="let's-begin-button">Let's Begin</button>
                    </div>
                </div>

                <div className="divfor-c">
                    <img src={c} alt="c img" className="image-head" />
                    <div className="div-course-name">
                        <h4 className="h4-course-name">C</h4>
                        <h5 className="h5-duration">50 hrs</h5>
                    </div>

                    <div className="div-author-cost">
                        <h4 className="h4-author-name">By: Jason Fedin</h4>
                        <h5 className="h5-cost">Cost: $20.45</h5>
                    </div>

                    <div className="div-beginbtn">
                        <button className="let's-begin-button">Let's Begin</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Course