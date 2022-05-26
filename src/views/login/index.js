import React, { useState } from "react";
import axios from "axios";
import { Input, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const body = {
        name: username,
        password: password
    }
    // console.log(body);

    const login = async (e) => {
        e.preventDefault();
        await axios.post(`${process.env.REACT_APP_API_URL_V1}/login.php`, body)
            .then(res => {
                const data = res.data
                // console.log("data", data);
                if (data) {
                    navigate("/home");
                    localStorage.setItem("screen", "home");
                } else {
                    message.error('Please check your username and password. Please, try again!');
                }
            })
            .catch(err => {
                console.log("err", err);
            })


    }

    return (
        <div >
            <div className="loginBox">
                <div className="loginFrom">
                    <h1>Logo</h1>

                    <Input className="inputFromLogin" size="large" placeholder="Name" prefix={<UserOutlined />} onChange={(e) => setUsername(e.target.value)} />
                    <Input.Password
                        className="inputFromLogin"
                        size="large"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} />

                    <button className="btnLogin" onClick={login}>Login</button>

                    {/* <h4>Don't have an account? <a href="#">Sign Up</a></h4> */}
                </div>
            </div>
        </div>
    )
}

export default Login