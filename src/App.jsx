import React from 'react'
import './App.css'
//import Login from './pages/Login'
//import Navbar from './components/Navbar'
//import Herosection from './components/Herosection'
//import TrustedCompanies from './components/TrustedCompanies'
//import JobSlider from './components/JobSlider'
//import CourseSlider from './components/CourseSlider'
//import Testimonials from './components/Testimonials'
//import Footer from './components/Footer'
//import ScrollToTop from './components/ScrollToTop'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './pages/Courses';
import Navbar from './components/Navbar'; // assuming this is the correct path
import Landing from './pages/Landing';
import JobList from './pages/joblist'; 
import Login from './pages/Login';
import MainPage from './pages/LandingPage';
import { JobProvider } from "./context/JobContext";
import { CourseProvider } from './context/CourseContext';


const App = () => {
  return (
    <JobProvider>
      <CourseProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/jobs" element={<JobList/>} />
        <Route path="/account" element={<Login/>} />
        <Route path="/feed" element={<MainPage/>} />
        {/* You can add more routes here like: */}
        {/* <Route path="/jobs" element={<Jobs />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
    </CourseProvider>
    </JobProvider>
  );
};

export default App;
