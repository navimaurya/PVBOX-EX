const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minlength: 4,
        maxlength: 20,
        require: [true, "Please choose valid username"],

    },
    phone: {
        type: Number,
        // unique: true,
        minlength: 10,
        // validate: {
        //     validator: function (ph) {
        //         if ((ph + "").length > 9 || this.email.length) {
        //             return true;
        //         }
        //         return false;
        //     },
        //     message: "Please provide email or phone number."
        // }
    },
    email: {
        type: String,
        // unique: true,

    },
    dob: {
        type: Date,
        default: null
    },
    emailVerified: {
        typeof: Boolean,
        default: false
    },
    phoneVerified: {
        typeof: Boolean,
        default: false
    },
    password: {
        type: String,
        required: [true, "Please provide a password."],
        minlength: 6,
        select: false,
    },
    passwordConfirm: {
        type: String,
        validate: {
            // This only works on CREATE and SAVE!!!
            validator: function (el) {
                return (el === this.password);
            },
            message: "Passwords are not the same!.",
        },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,

    name: {
        type: String,
        default: "Mr. User",
        maxlength: 40
    },
    image: {
        type: String,
        default: "default.jpg",
    },
    role: {
        type: String,
        default: "user",
    },
    about: {
        type: String,
        maxlength: 150,
        default: 'Hey I am using chatX.'
    },
    website: {
        type: String,
        maxlength: 150,
        default: null
    },
    city: {
        type: String,
        maxlength: 50,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    active: {
        type: Date,
        default: Date.now()
    }
});

userSchema.index({ phone: 1 });

// SAVING USERID IN DATA DOCUMENT
// userSchema.pre("save", async function (next) {
//     if (!this.isNew) return next();
//     const userId = new Faculty({
//         userId: this._id,
//         username: this.email,
//         name: this.name,
//         image: this.image,
//     });
//     await userId.save();
//     next();
// });

// userSchema.pre("findOneAndUpdate", async function (next) {
//   const user = await Faculty.findOneAndUpdate(
//     { userId: this._id },
//     { image: this.image }
//   );
//   console.log(this._id);
//   console.log(user);
//   // user.image = this.image;
//   // await user.save();
//   next();
// });

userSchema.pre("save", async function (next) {
    // Only run this function if password was actually modified
    if (!this.isModified("password")) return next();

    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);

    // Delete passwordConfirm field
    this.passwordConfirm = undefined;
    next();
});

userSchema.pre("save", function (next) {
    if (!this.isModified("password") || this.isNew) return next();

    this.passwordChangedAt = Date.now() - 1000 * 10;
    next();
});

userSchema.post(/^find/, function () {
    this.active = Date.now();
});

// userSchema.pre(/^find/, function (next) {
//   // this points to the current query
//   this.find({ active: { $ne: false } });
//   next();
// });

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        );
        return JWTTimestamp < changedTimestamp;
    }

    // False means NOT changed
    return false;
};

userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString("hex");

    this.passwordResetToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");
    // console.log({ resetToken }, this.passwordResetToken);
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
};

module.exports = mongoose.model("Users", userSchema);
