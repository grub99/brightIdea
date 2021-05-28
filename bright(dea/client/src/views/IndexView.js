import React,{ useState, useEffect } from 'react';
import DeleteButton from '../components/DeleteButton';
import{ Link } from "@reach/router";
import axios from "axios"

//created IndexView shows all athletes 
const IndexView = props => {
    const [ideas, setIdeas] = useState([])
    useEffect(() => {
        //Making a request /api/ideas
        //get a list of all ideas
        axios.get("http://localhost:8000/api/ideas")
            .then((response) => {
                setIdeas(response.data);
                //postman results are the same as (response.data)
            })
            .catch(err=>{
                console.log(err);
            })
    }, [])
    return(
        <div>
            <h1>Bright Ideas</h1> 
            <Link to="/create">Add Bright Idea</Link>
            <ul>
                {ideas.map((idea, index) => {    
                    return (
                        <li key={index}>
                            <Link to={"/" + idea._id}>{idea.idea} {idea.posterId.alias} {idea.likes.length}</Link> 
                        | <Link to = {"/" + idea._id + "/edit"}>Edit</Link> 
                        | <DeleteButton id={idea._id}/>
                        </li>
                    )
                })}        
            </ul> 
        </div>
    )
}

export default IndexView;


            // <ul>
            //     {ideas.map((idea, index) => {
            //         return (
            //             <div class="link">
            //                 <Link to ={"/" + idea._id}>{idea.title} {idea.price} {idea.description}</Link> | <Link to = {"/" + idea._id + "/edit"}>Edit</Link> | <DeleteButton id={idea._id}/>
            //             {/*| <Link to = {"/" + manager._id + "/edit"}></Link> | <DeleteButton id={athlete._id}/> */}
            //             </div>
            //         )
            //     })}        
            // </ul>