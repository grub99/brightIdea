const jwt = require("jsonwebtoken");
//Middleware to authenticate a user
//authenticate before passing req to controller
module.exports ={
    authenticate(req, res, next) {
        //jwt verify authorized to review route
        jwt.verify(
            //token passed from client to us 'proof' of authenticated
            req.cookies.userToken,

            process.env.JWT_SECRET,
            // Store info in payload
            //we
            (err, payload) => {
                if (err) {
                    res.status(401).json({ verified: false });
                    //valid proceed to controller
                } else {
                next();
                }
            }
        );
    }
}