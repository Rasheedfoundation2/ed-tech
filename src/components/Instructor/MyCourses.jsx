import React from "react";
import '../../css/Instructor/MyCourses.css';
import pic from "../../assets/images/courseSlider/js.png";
import { FaStar, FaUser } from "react-icons/fa";

const MyCourses = () => {
  return (
    <div className="instructor-course-wrapper">
        <div className="instructor-course-container">
            <div className="instructor-course-card">
                <img src={pic} alt="JavaScript Course" className="instructor-course-image" />

                <div className="instructor-course-body">
                    <h3 className="instructor-course-title">JavaScript Essentials</h3>

                    <div className="instructor-course-meta">
                        <span><FaUser className="user-icon"/> 1935 students</span>
                        <span><FaStar className="star-icon"/> 4.5</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MyCourses;
