import React from 'react';
import '../component/style/Nav.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='main-container-nav'>
            <div className='class-for-heading-logo'>
                <h1 className='h1-for-logo'>Codeyan.</h1>
            </div>

            <div className='div-for-nav_container'>
                <nav className='nav-class-navigation'>
                    <ul className='unorder-list'>
                        <li>
                            <Link to="/home" className='link-tag'>Home</Link>
                            <Link to="/course" className='link-tag'>Courses</Link>
                            <Link to="/features" className='link-tag'>Features</Link>
                            <Link to="/aboutus" className='link-tag'>About Us</Link>
                        </li>
                        <li>
                            {/* <Link to="/course" className='link-tag'>Courses</Link> */}
                        </li>
                        <li>
                            {/* <Link to="/features" className='link-tag'>Features</Link> */}
                        </li>
                        <li>
                            {/* <Link to="/aboutus" className='link-tag'>About Us</Link> */}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
