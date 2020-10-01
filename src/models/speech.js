import mongoose from 'mongoose';

const speechSchema = mongoose.Schema({
    record: {
        type: String,
        required: true
    },
})

const Speech = mongoose.model('Speech', speechSchema)

module.exports = Speech