const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const authController = require('./authController');
const Contact = require('./../models/contacts');
const User = require('./../models/users');
const users = require('./../models/users');

exports.getLoggedInUser = catchAsync(async (req, res, next) => {
    req.user.image = req.protocol + "://" + req.get("host") + "/users/profile/" + req.user.image;
    res.status(200).json({
        status: 'success',
        data: req.user
    })
});

exports.getFriends = catchAsync(async (req, res, next) => {
    const { userId } = req.body;
    let users = null;
    if (userId.startsWith('@')) {
        const str = userId.replace('@', '')
        users = await User.find({ username: { $regex: str } })
    } else {
        const phone = userId * 1 || 0
        users = await User.find({
            $or: [
                { username: { $regex: userId } },
                { name: { $regex: userId } },
                { email: { $regex: userId } },
                { phone },
            ]
        });
    }
    res.status(200).json({
        status: 'success',
        data: users
    })
})

exports.addContact = catchAsync(async (req, res, next) => {
    const { userId } = req.body;
    if (!userId) return next(new AppError('Please provide a valid userId.', 400));
    const email = username = userId;
    const phone = userId * 1 || 0;
    const user = await User.findOne({ $or: [{ email }, { phone }, { username }] })
    if (!user) return next(new AppError("Incorrect user identity", 404));
    const newContact = new Contact({
        user: req.user._id,
        friend: user._id
    })
    const data = await newContact.save()
    data.friend.image = req.protocol + "://" + req.get("host") + "/users/profile/" + data.friend.image
    res.status(200).json({
        status: 'success',
        data
    });
});

exports.getFriendsList = catchAsync(async (req, res, next) => {
    const user = req.user._id;
    let data = await Contact.find({ user }, { __V: -1 }).sort({ name: 1 });
    if (data.length > 0) {
        data.forEach((item, i) => {
            data[i] = item.friend;
            if (!item.friend.image.startsWith('http')) {
                data[i].image = req.protocol + "://" + req.get("host") + "/users/profile/" + item.friend.image;
            }
        });
    }
    console.log(data);
    res.status(200).json({
        status: 'success',
        total: data.length,
        data
    });
});