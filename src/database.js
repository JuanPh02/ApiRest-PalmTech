const mongoose = require('mongoose');

URI=('mongodb://localhost/db-palmtech')

mongoose.connect(URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then (db => console.log('Database MongoDB connected', db.connection.name))
.catch(error => console.log(error))

module.exports= mongoose
