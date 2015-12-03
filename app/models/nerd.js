// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
    name : {type : String, default: ''}
});

// MONGO URI
// mongodb://admin:nodetest@apollo.modulusmongo.net:27017/jup4eJyv
// MONGO CONSOLE
// mongo apollo.modulusmongo.net:27017/jup4eJyv -u admin -p nodetest
