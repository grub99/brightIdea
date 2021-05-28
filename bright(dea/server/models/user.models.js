const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
        userName: { 
            type: String, 
            required: [true, "Name is required"]
        },
        alias: {
            type: String, 
            required: [true, "Alias is required"]
        },
        email: {
            type: String, 
            required: [true, "Email is required"], 
            validate: {
                validator: (val) => /^([\w-\.]+@([\w-].)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email"
            },
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be 8 characters or longer"]
        }
    },
    { timestamps: true }
);

//Create a "virtual field use not going in Database"
UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set(value => (this._confirmPassword = value));
    //Comparison
UserSchema.pre("validate", function(next) {
    if (this.password !== this.confirmPassword) {
                            //key function
        this.invalidate("confirmPassword", "Password must match confirm password");   
    }
    next(); 
});
    // Hash
UserSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;