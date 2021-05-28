// import React, { useState } from 'react';
// import Form from '../components/Form';
// import axios from "axios";
// import { navigate } from "@reach/router";
// import { Link } from '@reach/router';

// const CreateView = props => {
//     const [errors, setErrors] = useState([]);
//     const onSubmitHandler = (e, data) => {
//         e.preventDefault();
//         //what to do when submit form with data
//         axios.post("http://localhost:8000/api/managers", data)
//             .then(response => {
//                 navigate('/');
//             })
//             .catch(err => {
//                 console.log(err);
//                 const errorResponse = err.response.data.errors;
//                 const errorArr = [];

//                 for(const key of Object.keys(errorResponse)) {
//                     errorArr.push(errorResponse[key].message);
//                 }
//                 setErrors(errorArr);
//             })
//     }
//     return (
//         <div>
//             <Link to="/">go Back</Link>
//             <h1>Product Manager</h1>
//             {errors.map((error, index) => {
//                 return(
//                     <p key={index}>{error}</p>
//                 )
//             })}
//             <Form 
//                 onSubmitHandler={onSubmitHandler}
//                 initialIdea=""
//                 initialPrice=""
//                 initialDescription=""
//             />
//         </div>
//     )
// }
// export default CreateView;




// import React,{ useState, useEffect } from 'react';
// import DeleteButton from '../components/DeleteButton';
// import{ Link } from "@reach/router";
// import axios from "axios"

// //created IndexView shows all athletes 
// const IndexView = props => {
//     const [managers, setManagers] = useState([])
//     useEffect(() => {
//         //Making a request /api/managers
//         //get a list of all managers
//         axios.get("http://localhost:8000/api/managers")
//             .then((response) => {
//                 setManagers(response.data);
//             })
//             .catch(err=>{
//                 console.log(err);
//             })
//     }, [])
//     return(
//         <div>
//             <h1>Bright Idea:</h1> 
//             <Link to="/create">Add Idea</Link>
//             <ul>
//         {/* loop through the managers/link Detail/Edit and Delete */}
//                 {managers.map((manager, index) => {
//                     return (
//                         <div class="link">
//                             <Link to ={"/" + manager._id}>{manager.idea} {manager.alias} {manager.description}</Link> | <Link to = {"/" + manager._id + "/edit"}>Edit</Link> | <DeleteButton id={manager._id}/>
//                         {/*| <Link to = {"/" + manager._id + "/edit"}></Link> | <DeleteButton id={athlete._id}/> */}
//                         </div>
//                     )
//                 })}        
//             </ul>
//         </div>
//     )
// }

// export default IndexView;