const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ToDoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    completed:{
        type:Boolean
    }
});
module.exports = mongoose.model('Todos', ToDoSchema);