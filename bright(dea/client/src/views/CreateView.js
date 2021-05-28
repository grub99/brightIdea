import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import axios from "axios";
import { navigate } from "@reach/router";
import { Link } from '@reach/router';
import Cookies from "js-cookie";

const CreateView = props => {
    const [errors, setErrors] = useState([]);
    const [user, setUser] = useState({});
    useEffect(() => {
        const user = Cookies.get("userData");
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);
    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        //what to do when submit form with data
        axios
            .post("http://localhost:8000/api/ideas", data, 
            {
                withCredentials: true
            })
            .then(response => {
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                const errorResponse = err.response.data.errors;
                const errorArr = [];

                for(const key of Object.keys(errorResponse)) {
                    console.log('really')
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }
    return (
        <div>
            <Link to="/">go Back</Link>
            <h4>Name: {user.userName}</h4>
            <h4>Alias: {user.alias}</h4>
            <h4>Email: {user.email}</h4>
            
            
            {errors.map((error, index) => {
                return(
                    <p key={index}>{error}</p>
                )
            })}
            <Form 
                onSubmitHandler={onSubmitHandler}
                initialIdea=""
                initialPosterId=""
                initialLikes=""
            />
        </div>
        
    )
}
export default CreateView;