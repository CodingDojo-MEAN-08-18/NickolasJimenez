const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  name: { type: String, required: true, minLength: '3' }
})

module.exports = mongoose.model('Author', authorSchema);
