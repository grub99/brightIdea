const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
    idea: {
        type: String,
        required: [
            true,
            "Idea is required"
        ]
    },
    posterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    //an array of reference to users objectIds [] 
    likes: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
    } ],
    
}, { timestamps: true })

module.exports.Idea = mongoose.model("Idea", IdeaSchema);









// const mongoose = require('mongoose');
// const PostSchema = require('./postSchema');
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//     name: {
//         type: String,
//         validate: {
//             validator: name => name.length > 2,
//             message: "Name must be longer than 2 Chars"
//         },
//         required: [true, 'Name is required.']
//     },
//     posts: [PostSchema],
//     likes: Number 
// });

// UserSchema.virtual('postCount').get(function() {
//     return this.posts.length;
// });
// const User = mongoose.model('user', UserSchema);
// module.exports = User;