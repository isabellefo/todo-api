const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    finished:{
        type: Boolean,
        required: false,
    },
    date:{
        type: Date,
        default: Date.now(),
    },
});

module.exports = Todo = mongoose.model("todos", taskSchema);