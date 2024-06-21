import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/");
        }
    }, [navigate]);

    const collectData = async(e) => {
        e.preventDefault(); // Prevent default form submission
        // console.warn(name, email, password);
        const body = { name, email, password };

        try {
            const res = await axios.post(
                "https://ecommerce-dashboard-06ge.onrender.com/register",
                // "http://localhost:5000/register",
                body
            );
            const result = res.data;

            if (result && result.result && result.auth) {
                localStorage.setItem("user", JSON.stringify(result.result));
                localStorage.setItem("token", JSON.stringify(result.auth));
                navigate("/");
            } else {
                alert("Registration failed, please try again.");
            }
        } catch (err) {
            // console.log(err)
            alert(err.response.data.result);
        }
    };

    return ( <
        div className = "register" >
        <
        h1 > Register < /h1> <
        form onSubmit = { collectData } >
        <
        input className = "inputbox"
        type = "text"
        value = { name }
        onChange = {
            (e) => setName(e.target.value)
        }
        placeholder = "Enter Name"
        required /
        >
        <
        input className = "inputbox"
        type = "text"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        placeholder = "Enter Email"
        required /
        >
        <
        input className = "inputbox"
        type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        placeholder = "Enter Password"
        required /
        >
        <
        button className = "appbutton"
        type = "submit" >
        Sign Up <
        /button> < /
        form > <
        /div>
    );
};

export default Signup;