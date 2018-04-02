const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  body: String,
  contact: { type: Schema.Types.ObjectId, ref: 'Contact'}
});