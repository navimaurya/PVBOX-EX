const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const User = require('./../models/users');
const Contact = require('./../models/contacts');
const Message = require('./../models/messages');

//Send function for sending message to server
//It will save the message on the database.
exports.send = catchAsync(async (req, res, next) => {
    const { message, receiver } = req.body;
    const sender = req.user._id;
    if (receiver.toString() == sender._id.toString()) return next(new AppError('You cant send message to yourself.', 400));
    const data = new Message({ message, receiver, sender });
    await data.save();
    res.status(200).json({
        status: 'success',
        data
    })
});

exports.receive = catchAsync(async (req, res, next) => {
    const receiver = (req.user._id).toString();
    const friend = req.body.friend.toString();
    if (!friend) return next(new AppError("Please tell use your friend id."));
    if (receiver === friend) return next(new AppError("You can't send message to yourself.", 400));
    let data;
    //getting data by Sender
    console.log(friend, receiver)
    const filter = { $or: [{ $and: [{ receiver }, { sender: friend }] }, { $and: [{ receiver: friend }, { sender: receiver }] }] };
    data = await Message.find(filter, { __v: 0 }).limit(200).sort({ sent: 1 });
    await Message.updateMany({ receiver, sender: friend, seen: null }, { seen: new Date() });
    res.status(200).json({
        status: 'success',
        total: data.length,
        friend,
        data: data || []
    });
});

//Get function is for retrieve message from database
exports.chstList = catchAsync(async (req, res, next) => {
    const receiver = req.user._id;
    const result = await Message.aggregate([
        { $match: { $or: [{ receiver }, { sender: receiver }] } },
        {
            $group: {
                _id: { $switch: { branches: [{ case: { $eq: ['$sender', receiver] }, then: '$receiver' }], default: '$sender' } },
                sender: { $last: '$sender' }, receiver: { $last: '$receiver' }, message: { $last: '$message' },
                sent: { $last: '$sent' }, delivered: { $last: '$delivered' }, seen: { $last: '$seen' },
                unseen: { $sum: { $cond: [{ $and: [{ $ne: ['$sender', receiver] }, { $eq: ['$seen', null] }] }, 1, 0] } }
            }
        },
        { $project: { friend: { $cond: { if: { $eq: ["$sender", receiver] }, then: '$receiver', else: '$sender' } }, sender: 1, receiver: 1, message: 1, sent: 1, delivered: 1, seen: 1, unseen: 1 } },
        { $sort: { 'sent': -1 } }
    ]).sort({ sent: -1 }).limit(50);
    if (!result) {
        return res.status(200).json({
            status: 'success',
            total: 0,
            data: null
        });
    }
    const data = await User.populate(result, { path: 'friend', select: 'name username image ' });
    if (!data) return next(new AppError('Something went wrong please try again leter'));
    let tracker = {};
    await Promise.all(data.map(async (item, index) => {
        // if (tracker[item.friend.phone] !== undefined) {
        //     data[index].friend.name = tracker[item.friend.phone];
        // } else {
        //     const cn = await Contact.findOne({$and: [{userId: receiver}, {number: item.friend.phone}]}, 'name');
        //     if (cn){
        //         data[index].friend.name = cn.name;
        //     }
        // }
        data[index].friend.image = req.protocol + "://" + req.get("host") + "/users/profile/" + item.friend.image;
    }));
    res.status(200).json({
        status: 'success',
        total: data.length,
        data
    });
});

// exports.deleteChat = catchAsync(async(req, res, next) =>{
//
// });

exports.sync = catchAsync(async (req, res, next) => {
    const receiver = req.user._id;
    // const lastSync = req.query.syncat;
    // if (lastSync === 'undefined') return next(new AppError('Provide last sync time.'));
    const syncat = new Date();
    let data;
    data = await Message.find({ $and: [{ receiver }, { delivered: null }] }).sort({ sent: 0 });
    data = await Message.updateMany({ $and: [{ receiver }, { delivered: null }] }, { delivered: Date.now() });
    res.status(200).json({
        status: 'success',
        total: data.length,
        syncat,
        data
    });
});

exports.newMssages = catchAsync(async (req, res, next) => {
    const receiver = req.user._id;
    // const lastSync = req.query.syncat;
    // if (lastSync === 'undefined') return next(new AppError('Provide last sync time.'));
    const syncat = new Date();
    // let data;
    // data = await Message.find({$and:[{receiver}, {delivered:  null}]}).sort({sent : 0}).sort({sent: 1});
    const result = await Message.aggregate([
        { $match: { $and: [{ receiver }, { delivered: null }] } },
        {
            $group: {
                _id: { $switch: { branches: [{ case: { $eq: ['$sender', receiver] }, then: '$receiver' }], default: '$sender' } },
                // receiver: { $last: '$receiver' },
                message: { $push: '$$ROOT' },
            }
        },
        { $project: { message: 1 } },
        { $sort: { 'sent': -1 } }
    ])
    // const result = await Message.aggregate([
    //     { $match: { $and: [{ receiver }, { delivered: null }] } },
    //     {
    //         $group: {
    //             _id: { $switch: { branches: [{ case: { $eq: ['$sender', receiver] }, then: '$receiver' }], default: '$sender' } },
    //             sender: { $last: '$sender' },
    //             receiver: { $last: '$receiver' },
    //             message: { $push: '$_id' },
    //             // sent: { $push: '$sent' }, 
    //             // delivered: { $last: '$delivered' }, 
    //             // seen: { $last: '$seen' },
    //             // unseen: { $sum: { $cond: [{ $eq: ['$seen', null] }, 1, 0] } }
    //         }
    //     },
    //     { $project: { friend: { $cond: { if: { $eq: ["$sender", receiver] }, then: '$receiver', else: '$sender' } }, sender: 1, receiver: 1, message: 1, sent: 1, delivered: 1, seen: 1, unseen: 1 } },
    //     { $sort: { 'sent': -1 } }
    // ]).sort({ sent: -1 }).limit(20);
    await Message.updateMany({ $and: [{ receiver }, { delivered: null }] }, { delivered: Date() })
    res.status(200).json({
        status: 'success',
        syncat,
        data: result
    });
});

//This function tell the message is seen or not
exports.seen = catchAsync(async (req, res, next) => {
    console.log("dfsf")
});