const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for data
const ContactSchema = new Schema({
  lastName: String,
  firstName: String,
  address: {
    addressLineOne: String,
    addressLineTwo: String,
    city: String,
    postcode: String,
  },
  phoneNumber: String,
  emailAddress: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

// Use the schema to register a model with MongoDb
mongoose.model('Contact', ContactSchema);

