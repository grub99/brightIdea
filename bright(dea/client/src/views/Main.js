import React from 'react';
import { navigate } from "@reach/router";
import Login from "../components/Login";
import RegisterUser from "../components/RegisterUser";
// import { link } from "react-router-dom"

const Main = () => {
    
    return (
        <div className="page-wrapper">
            <div>
                <h1>Welcome</h1>
            </div>
                <Login />
                <hr />
                <RegisterUser />
            <div>
                <button onClick={() => navigate("/")}>Back to Bright Ideas</button>
            </div>
        </div>
    );
};

export default Main;