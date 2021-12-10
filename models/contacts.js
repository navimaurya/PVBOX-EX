const mongoose = require('mongoose');
const validator = require('validator');
const Users = require('./../models/users');

const contactsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'Users',
        require: [true, 'Contact should belong to a user.']
    },
    friend: {
        type: mongoose.Schema.ObjectId,
        ref: 'Users',
        require: [true, 'Your friend should be on this app.']
    },

}, { toJSON: { virtuals: true } });

const popString = 'image name phone website city about active code username email dob'

contactsSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'friend',
        select: popString
    });
    next();
});
contactsSchema.pre(/^save/, async function (next) {
    await this.populate({
        path: 'friend',
        select: popString
    }).execPopulate();
    next();
});

contactsSchema.index({ user: 1 });
contactsSchema.index({ friend: 1 });
module.exports = mongoose.model('Contacts', contactsSchema);