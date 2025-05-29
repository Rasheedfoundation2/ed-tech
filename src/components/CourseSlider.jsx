import React from "react";
import '../css/CourseSlider.css'
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from "swiper/modules";
import { CourseContext } from '../context/CourseContext';


const CourseSlider = () => {
   const { courses } = useContext(CourseContext);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/courses');
    };
            
    return (
        <>
            <div className="courseslider-wrapper">
                <div className="courseslider-container">
                <h2 className="courseslider-title">Popular Courses</h2>
                    <Swiper 
                        modules={[Navigation,Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        autoplay={true}
                        navigation={true}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}>

                        {courses.map((course, index) => (
                            <SwiperSlide key={index}>
                            <div className="course-card">
                                <img src={course.image} alt={course.title} className="course-logo" />
                                <h3 className="course-title">{course.title}</h3>
                                <p className="course-instructor">instructor</p>
                                <p className="course-duration">1 month</p>
                                <button className="course-btn">View</button>
                            </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>

                </div>
                <button className="courseslider-btn" onClick={handleClick}>View all Courses</button>
            </div>
        </>
    )

}

export default CourseSlider;