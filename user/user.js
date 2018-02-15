var mongooes = require('mongoose');
var UserSchema = new mongooes.Schema({
    name: String,
    email: String,
    password: String
});
mongooes.model('User', 'UserSchema');
module.exports= mongooes.model('User');
