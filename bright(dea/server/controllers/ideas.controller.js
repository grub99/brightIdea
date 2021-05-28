// Import Athlete
const jwt = require("jsonwebtoken");
const { Idea } = require("../models/ideas.model");
// const { Athlete } = require("../models/athlete.model");

//export a list taken req, res .. here will query database for Athletes
// write a query to talk to MongoDB database and return all people in database
//find every Athlete and have a json response of a list of all Athletes

module.exports.list = (request, response) => {

    Idea.find({})
        .populate("posterId", " alias _id")
        .populate("likes", "userName alias _id") 
        .then(ideas => {
            response.json(ideas);
        })
        // const likeCount=likes.map(like => `${like.count}`) 
        // if err catch response 400 and error
        .catch(err => {
            response.status(400).json(err);
        })
}
//creating a method/ get data from request.body
module.exports.create = (request, response) => {
    const { idea } = request.body;
    const decodedJWT = jwt.decode(request.cookies.userToken, { complete: true});
    Idea.create({
        idea: idea,
        posterId: decodedJWT.payload._id,  //this is the loggedin user id
        likes: [],
    })
        .then(idea => {
            response.json(idea)
        })
        .catch(err => {
            response.status(400).json(err);
        })
}

module.exports.detail = (request, response) => {
    const { id } = request.params;
        // .populate("posterId", " alias _id")
        // .populate("likes", "userName alias _id")
    Idea.findOne({ _id: id })
        .then(idea => {
            response.json(idea)
        })
        .catch(err => {
            response.status(400).json(err);
        })

}
module.exports.update = (request, response) => {
    const { id } = request.params;
    const { idea, posterId, likes } = request.body;
    Idea.findOneAndUpdate({ _id: id }, {
        idea,
        posterId,
        likes,
    },  {
            new: true,
            useFindAndModify: true
        })
        .then(idea => {
            response.json(idea)
        })
        .catch(err=>{
            response.status(400).json(err);
        })
}

module.exports.delete = (request, response) => {
    const { id } = request.params;
    Idea.deleteOne({ _id: id })
        .then(deleteConfirmation => {
            response.json(deleteConfirmation);
        })
        .catch(err => {
            response.status(400).json(err);
        })
    }

module.exports.likeIdea = (request, response) => {
    const { id } = request.params;
    const decodedJwt = jwt.decode(request.cookies.userToken, { complete: true });
    const user_id = decodedJwt.payload._id;

    Idea.findByIdAndUpdate( id,
         // this is the data that we want to update
            {
            $push: { likes: user_id } 
            }, 
            {
            new: true,  // give me the new version...not the original
            useFindAndModify: false,  // by default mongoose will replace the entire object
            })
    .populate("posterId", " alias _id")
    .populate("likes", "userName alias _id")

        .then(idea => {
            response.json(idea)
        })
        .catch(err => {
            response.status(400).json(err);
        })
}




//import express from 'express';
// import mongoose from 'mongoose';

// import PostMessage from '../models./postMessage.js';

// const router = express.Router();

// export const getPosts = async (req, res) => {
//     try{
//         const postMessages = await PostMessage.find();

//         res.status(200).json(postMessages);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }

// export const getPost = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const post = await PostMessage.findById(id);
//         res.status(200).json(post);
//     }
// }

// export const createPost =

