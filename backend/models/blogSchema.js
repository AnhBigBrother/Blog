const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    snippet: {
        type: String,
        required: [true, 'snippet is required']
    },
    body: {
        type: String,
        required: [true, 'body is required']
    },
    author: {
        type: String,
        required: [true, 'author is required']
    },
    comments: {
        user: String,
        comment: String,
    }
}, {timestamps: true})

const Blog = mongoose.model('blogs', blogSchema);

module.exports = Blog;