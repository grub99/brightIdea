const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//export an object that is full of methods
//standard req res anonymous function
module.exports = {
    //create user: save method triggers bycrypt hashing in model file
    //hashing is PRE save
    register: (req, res) => { 
        //put req.body in temp variable called user
        const user = new User(req.body);
        //check for validation
        user
        //hashes password //use methods
            .save()
            .then(() => {
                res.json({ msg: "success!", user: user });
            })
            .catch((err) => res.status(400).json(err));
    },
    login(req, res) {
        User.findOne({ email: req.body.email })
            .then(user => {
                if ( user === null ) {
                    res.status(400).json({ msg: "No users with that email" });
                } else {
                    bcrypt
                    //Data sent the not encrypted password / encrypted string
                        .compare(req.body.password, user.password)
                        .then((passwordIsValid) => {
                            let userData = {
                                userName: user.userName,
                                alias: user.alias,
                                email: user.email,
                            };
                            if (passwordIsValid) {
                                res.cookie("userData", JSON.stringify(userData));
                                res.cookie(
                                        "userToken",
                                        jwt.sign({ _id: user._id }, process.env.JWT_SECRET),
                                        { 
                                            httpOnly: true,
                                            expires: new Date(Date.now() + 9000000),
                                        }
                                    );                               
                                res.json({
                                    msg: "success!",
                                    userData,
                                });
                            } else {
                                res
                                .status(400)
                                .json({ msg: "Issue logging in please try again" })
                            }
                        })
                        .catch((err) => 
                            res.status(400).json({ msg: "Password is invalid" })
                        ); 
                }
            })
            .catch((err) => res.json(err));
    },
    logout(req, res) {
        res
            .cookie("userToken", jwt.sign({_id: ""}, process.env.JWT_SECRET), {
                httpOnly: true,
                maxAge: 0,
            })
            .json({ msg: "ok" });
    },
    getLoggedInUser(req, res) {
        const decodedJWT = jwt.decode(req.cookies.userToken, { complete: true});
        User.findById(decodedJWT.payload._id)
            .then((user) => res.json(user))
            .catch((err) => res.json(err));
    },
}







// const User = require("../models/user.models");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// module.exports = {
//     register: (req, res) => {
//         console.log(req.body)
//         const user = new User(req.body);

//         user
//             .save()
//             .then(() => {
//                 res.json({ msg: "success!", user: user });
//             })
//             .catch(err => res.status(400).json(err));
//     },

//     login: (req, res) => {
//         console.log("inside of login" + req.body.email)
//         console.log(req.body)
//         User.findOne({ email: req.body.email }) 
//             .then(user => {
//                 if (user === null) {
//                     res.status(400).json({ msg: "Invalid login attempt" });
//                 } else {
//                     bcrypt
//                         .compare(req.body.password, user.password)
//                         .then(passwordIsValid => {
//                     //   USERDATA USERDATA

//                             if (passwordIsValid) {
//                                 res 
//                                     .cookie(
//                                         //"userData", JSON.stringify(userData00;)
//                                         "userToken",
//                                 //sign the object that contains the 
//                                 //user's _id using the secret
//                                         jwt.sign({ _id: user._id }, process.env.JWT_SECRET),
//                                         { 
//                                             httpOnly: true,
//                                             expires: new Date(Date.now() + 90000),
//                                         }
//                                     )
//                                     .json({ 
//                                         msg: "success!", 
//                                         userLoggedIn: {
//                                             userName: `${user.name}`,
//                                         }
//                                     });
//                             } else {
//                                 res
//                                 .status(400)
//                                 .json({ msg: "Invalid login attempt" });
//                             }
//                         })
//                         .catch(err => 
//                             res.status(400).json({ msg: "Invalid login attempt" })
//                         );
//                 }
//             })
//             .catch(err => {
//                 console.log("caught an error")
//                 res.json(err)
//             });
//     },
//     logout(req, res) {
//         res.clearCookie("userToken");
//         res.json({ msg: "userToken cookie cleared" });
//     },
//     logout2(req, res) {
//         res
//             .cookie("userToken", jwt.sign({ _id: "" }, process.env.JWT_SECRET), {
//                 httpOnly: true,
//                 maxAge: 0
//             })
//             .json({ msg: "ok" });
//     },
//     getLoggedInUser(req, res) {
//         const decodedJWT = jwt.decode(req.cookies.userToken, { complete: true });
//         User.findById(decodedJWT.payload._id)
//             .then(user => res.json(user))
//             .catch(err => res.json(err));
//     },
// };