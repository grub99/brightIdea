import { navigate } from '@reach/router';
import React, { useState, useEffect } from 'react';
import DeleteButton from '../components/DeleteButton';
import Form from '../components/Form';
import axios from 'axios';
import { Link } from "@reach/router";

const EditView = props => {
    const { id } = props;
    const [idea, setIdea] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/ideas/" + id)
            .then(response=>{
                setIdea(response.data)
                setLoaded(true);
            })
            .catch(err => {
                console.log(err)
            });
    }, [])
    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/ideas/" + id, data)
            .then(response => {
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <Link to="/">go Back</Link>
            <h1>Editing {idea.idea}</h1>
            {loaded &&
                <Form 
                    onSubmitHandler={onSubmitHandler} 
                    initialIdea=""
                    initialPosterId=""
                    initialLikes=""
                />
            }
            <DeleteButton />
        </div>
    )
}
export default EditView;