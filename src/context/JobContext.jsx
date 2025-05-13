import React, { createContext, useState, useContext } from "react";
import amazonLogo from '../assets/images/jobSlider/amazon.png'
import jioLogo from '../assets/images/jobSlider/jio.png'
import cognizantLogo from '../assets/images/jobSlider/cognizant.png'
import coforgeLogo from '../assets/images/jobSlider/coforge.png'
import breadLogo from '../assets/images/jobSlider/bread.png'

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([
    { title: "Software Developer", company: "Amazon", location: "hyderabad, India" ,logo:amazonLogo,type: "Full-Time", salary: "₹6 - ₹8 LPA"},
    { title: "Junior Web Developer", company: "Jio", location: "Mumbai, India",logo:jioLogo,type: "Remote", salary: "₹8 - ₹12 LPA" },
    { title: "Data Analyst", company: "Cognizant", location: "Pune, India",logo:cognizantLogo,type: "Full-Time", salary: "₹5 - ₹7 LPA"},
    { title: "Frontend Engineer Intern", company: "Bread Financial", location: "Remote",logo:breadLogo,type: "Internship", salary: "₹15,000/month"},
    { title: "Backend Developer", company: "Coforge", location: "Noida, India",logo:coforgeLogo, type: "Full-Time", salary: "₹6 - ₹9 LPA" },
  ]);

  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);

