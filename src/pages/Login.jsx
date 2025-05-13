import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Login.css';
import loginPicture from "../assets/images/login/login.jpg";
import googleLogo from "../assets/images/login/google.png";

const Login = () => {
    const [role, setRole] = useState("student");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (role === "student" && email === "arun" && password === "password") {
            navigate("/feed");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="login-wrapper">
            <div className="container">
                <div className="left-section">
                    <img src={loginPicture} alt="login" />
                </div>

                <div className="right-section">
                    <div className="login-form">
                        <div className="top">
                            <h1>Login</h1>
                            <select className="role-dropdown" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="student">Student</option>
                                <option value="recruiter">Recruiter</option>
                                <option value="instructor">Instructor</option>
                            </select>
                        </div>

                        <button className="google-btn">
                            <img src={googleLogo} alt="Google Logo" className="google-logo" />
                            Login with Google
                        </button>

                        <div className="divider">
                            <span>or</span>
                        </div>

                        <input
                            className="username"
                            type="text"
                            placeholder="Email ID"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            className="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <a href="..." target="_blank" rel="noopener noreferrer">Forgot Password?</a>

                        <button className="login-btn" onClick={handleLogin}>Login</button>

                        <button className="signup-btn">
                            Don't have an account?
                            <span className="btn-color"> Sign up</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
