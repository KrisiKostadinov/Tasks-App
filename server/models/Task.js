const { mongoose, model, Schema } = require('mongoose');

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    createdOn: {
        type: String,
        default: Date.now,
    }
});

const Task = model('Task', TaskSchema);

module.exports = Task;