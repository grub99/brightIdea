import React, { useState } from 'react';
import axios from "axios";
import { navigate } from "@reach/router";


const Register = props => {
    const [userName, setUserName ] = useState("");
    const [alias, setAlias ] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmReg, setConfirmReg] = useState("");
    const [errs, setErrs] = useState({});
    
    const register = event => {
        event.preventDefault();

        const newUser = {
            // using shortcut syntax - this is the same as "userName: userName,"
            userName,
            alias,
            email,
            password,
            confirmPassword,
        };
        axios.post("http://localhost:8000/api/user/register",
            newUser,
        {
    /* this will force the sending of the credentials / cookies as they can be updated
    XMLHttpRequest from a different domain cannot set cookie values for their own domain.
    unless withCredentials is set to true before making the request */
            withCredentials: true
        })
        .then((response) => {
            console.log(response.data);
            navigate("/main"); // ***********
        // when we successfully create the account, reset state for registration form
        setUserName("");
        setAlias("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErrs({}); //remember to reset errors state if it was successfully
        setConfirmReg("Thank you for Registering, you can log in!");
        })
        .catch((err) => {
            console.log(err);
            setErrs(err.response.data.errors);
        });
    };


    return (
        <div>
            <h2>Register</h2>
            {
                confirmReg ?
                <h4 style={{color: "green"}}>{confirmReg}</h4>
                :null
            }
            <form onSubmit={register}>
                {/* <fieldset>
                    <legend>Register</legend> */}
                    <div>
                        <label>Name:</label>
                        {
                            errs.userName ? <span className="error-text">{ errs.userName.message }</span> :null
                        }
                        <input
                            type="text"
                            name="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Alias:</label>
                        {
                            errs.alias ?
                            <span className="error-text">{ errs.alias.message }</span>
                            :null
                        }
                        
                        <input
                            type="text"
                            name="alias"
                            value={alias}
                            onChange={(e) => setAlias(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        {
                            errs.email ? 
                                <span className="error-text">{ errs.email.message }</span>
                                : null
                        }
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        {
                            errs.password ? 
                                <span className="error-text">{ errs.password.message }</span>
                                :null
                        }
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        {
                            errs.confirmPassword?
                                <span className="error-text">{ errs.confirmPassword.message}</span>
                                : null
                        }
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}/>

                    </div>
                    <div className="button-wrapper">
                        <button className="myButton solo" type="submit">Register Me</button>
                    </div> 
                {/* </fieldset> */}
            </form>
        </div>
    );
}

export default Register;