var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const user = new Schema({
    username: String,
    password: String
}, { collection: 'user' })
module.exports = mongoose.model('user', user)