import React from "react";
import icon from '../assets/images/image.png';
import userIcon from '../assets/images/user.png';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="nav-wrapper">
                <div className="nav-container">
                    <div className="nav-left-section">
                        <img className="nav-logo" src={icon} alt="logo" />
                        <h1 className="title">EdTech</h1>
                    </div>

                    <div className="nav-right-section">
                        <ul className="nav-links">
                            <li><Link to="/jobs">Jobs</Link></li>
                            <li><Link to="/courses">Courses</Link></li>
                            <li><Link to="/explore">Explore</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li>
                                <Link to="/account">
                                    <img className="user-icon" src={userIcon} alt="user profile" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
