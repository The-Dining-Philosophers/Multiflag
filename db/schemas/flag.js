const mongoose = require('mongoose');
const { Schema } = mongoose;

const FlagSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A name is required'],
        index: { unique: true }
    },
    path: {
        type: String,
        required: [true, 'A path is required'],
        index: { unique: true }
    }
});

const Flag = mongoose.model('flag', FlagSchema);
module.exports = Flag;