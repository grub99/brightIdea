
import React, { useState } from 'react';

const Form = (props) => {
    const { onSubmitHandler, initialIdea, initialPosterId, initialLikes} = props;
    // const { onSubmitHandler, initialTitle, initialPrice, initialDescription} = props;

    const [idea, setIdea] = useState(initialIdea);
    const [likes, setLikes] = useState(initialLikes);
    const [posterId, setPosterId] = useState(initialPosterId);
    // const [title, setTitle] = useState(initialTitle);
    // const [price, setPrice] = useState(initialPrice);
    // const [description, setDescription] = useState(initialDescription);

    const handleIncrement = (e) => {
        setLikes()
    }

    return (
        <form onSubmit={e =>{onSubmitHandler(e, {idea, posterId, likes }) }}>
            <p>
                <label>Idea</label>
                <input type="text" value={idea} name="idea" onChange={(e)=>{setIdea(e.target.value)}}/>
            </p>
            {/* <p>
                <label></label>
                <input type="text" value={} name="" onChange={(e)=>{setPrice(e.target.value)}}/>
            </p>
            <p>
                <label></label>
                <input type="text" value={} name="" onChange={(e)=>{setDescription(e.target.value)}}/>
            </p> */}
            <input type="submit" value="Create" />
        </form>
        
    );
}

export default Form;


        // <form onSubmit={e =>{onSubmitHandler(e, {title, price, description}) }}>
        //     <p>
        //         <label>Title</label>
        //         <input type="text" value={title} name="title" onChange={(e)=>{setTitle(e.target.value)}}/>
        //     </p>
        //     <p>
        //         <label>Price</label>
        //         <input type="text" value={price} name="price" onChange={(e)=>{setPrice(e.target.value)}}/>
        //     </p>
        //     <p>
        //         <label>Description</label>
        //         <input type="text" value={description} name="description" onChange={(e)=>{setDescription(e.target.value)}}/>
        //     </p>
        //     <input type="submit" value="Create" />
        // </form>