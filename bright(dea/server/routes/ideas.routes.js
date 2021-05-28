//Must link controller
const { authenticate } = require("../config/jwt.config");
const IdeasController = require("../controllers/ideas.controller");

//Create our routes
module.exports = function(app){
    app.get("/api/ideas", IdeasController.list);
    app.post("/api/ideas", authenticate, IdeasController.create);
    app.get("/api/ideas/:id", IdeasController.detail);
    app.put("/api/ideas/:id", IdeasController.update);
    app.put("/api/ideas/:id/like", IdeasController.likeIdea);
    app.delete("/api/ideas/:id", IdeasController.delete);
}



// import express from 'express';

// import { getPosts, getPost, createPost, updatePost, LikePost, deletePost } from '..controller'
// import auth from '../middleware/auth.js';

// const router = express.Router();

// router.get('/', getPosts);
// router.post('/', auth, createPost);
// router.patch('/:id', auth, deletePost);
// router.patch('/:id?likePost', auth, likePost);

// export default router;
