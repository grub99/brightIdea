import React, { useState, useEffect } from 'react';
import DeleteButton from "../components/DeleteButton";
import axios from "axios";
import { Link } from "@reach/router";

const DetailView = props => {
    const { id } = props;
    const [idea, setIdea] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/ideas/" + id)
            .then(response => {
                setIdea(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[])
    return (
        <div>
            <Link to="/">go Back</Link>
            <h1>{idea.idea}</h1>
            <h3>{idea.posterId}</h3>
            <h4>{idea.likes}</h4>
            <DeleteButton id={idea._id} />
        </div>
    )
}
export default DetailView;