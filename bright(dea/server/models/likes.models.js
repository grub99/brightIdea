// postId: {
//   type: Schema.Types.ObjectId,
//   required: true
// },
// userId: {
//   type: Schema.Types.ObjectId,
//   required: true
// },
// likedBy: {
//   type: Schema.Types.ObjectId,
//   ref: 'User',
//   required: true,
// }








// const leaders = await db.users.find({}).sort({likeCount: -1}).limit(10) //top 10?
// .. new like created ...


// db.users.updateOne({_id: liked_reply.author}, {$inc: {likeCount: 1}})