import React, {useEffect, useState } from 'react';
import { navigate}  from '@reach/router';
import axios from "axios";


const Header = () => {

    const logout = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/logout", {
            // no body required for this request
        }, { 
            withCredentials: true,
        })
        .then((res) => {
            console.log(res.data);
            navigate("/main")
        })
        .catch(err => {
            console.log(err);
        })
    };

    return (
        <div>
            <header>
                <h1>Bright Ideas</h1>
                
                <div className="button-wrapper">
                    {/* <button className="myButton" onClick={() => navigate("/")}>All Skiffs</button> */}
                    <button className="myButton" onClick={() => navigate("/")}>All Bright Ideas</button>
                    <button className="myButton"  onClick={() => navigate("/main")}>Login / Register</button>
                    <button className="myButton"  onClick={(e) => logout(e)}>Logout</button>
                    {/* <button onClick={getLoggedInUser}>Check My Brain for a Contusion.</button> */}
                </div>
            </header>
            {/* <div className="signed-in"> Welcome, { user ? user.firstName: "oh nope"  }</div> */}
            {/* <div className="signed-in"> Welcome, { getLoggedInUser === true ? user.firstName: "nope"  }</div> */}
            {/* <button onClick={getLoggedInUser}>Check My Brain for a Contusion.</button> */}
        </div>
    )
}

export default Header;