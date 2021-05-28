require("dotenv").config();

const express = require('express');
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");



app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
}));
app.use(cookieParser());

////pass a userId inside of the BODY set user based on userId from 
                                        // data inside the data.js file
// function setUser(req, res, next) {
//     const userId = req.body.userId
//     if (userId) {
//         req.user = users.find(user => user.id ===userId)
//     }
//     next()
// }

require('./server/config/mongoose.config')(process.env.DB_NAME);
require("./server/routes/ideas.routes")(app);
require("./server/routes/user.routes")(app);



app.listen(process.env.DB_PORT, () => console.log(`Listening on port: ${process.env.DB_PORT}`)); 

