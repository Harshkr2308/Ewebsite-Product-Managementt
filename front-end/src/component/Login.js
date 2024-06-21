import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/");
        }
    }, [navigate]);

    const handleLogin = async(e) => {
        e.preventDefault(); // Prevent default form submission
        // console.log("email, password", email, password);
        let result = await fetch("https://ecommerce-dashboard-06ge.onrender.com/login", {
            // let result = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        result = await result.json();
        // console.log("result", result);
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.auth));
            navigate("/");
        } else {
            alert(result.result);
        }
    };

    return ( <
        div className = "login" >
        <
        form onSubmit = { handleLogin } >
        <
        input type = "text"
        className = "inputbox"
        placeholder = "Enter Email"
        onChange = {
            (e) => setEmail(e.target.value)
        }
        value = { email }
        required /
        >
        <
        input type = "password"
        className = "inputbox"
        placeholder = "Enter Password"
        onChange = {
            (e) => setPassword(e.target.value)
        }
        value = { password }
        required /
        >
        <
        button className = "appbutton"
        type = "submit" >
        Login <
        /button> < /
        form > <
        /div>
    );
};

export default Login;