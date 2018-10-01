'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the contact name',
    },
    phones: [String],
    emails: [String],
    whatsapp: [String],
});

// Duplicate the ID field.
ContactSchema.virtual('id').get(function(){
    return this._id;
});

// Ensure virtual fields are serialised.
ContactSchema.set('toJSON', {
    transform: function (doc, ret) { delete ret._id; delete ret.__v; },
    virtuals: true,
});

module.exports = mongoose.model('Contact', ContactSchema);
