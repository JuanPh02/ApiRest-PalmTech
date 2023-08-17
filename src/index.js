const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
const dotenv = require('dotenv').config();
require('./database')
const PORT = 8000;

app.set('port', process.env.PORT || 8000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors({origen:'*'}))

app.use('/technicians',require('./routes/technicians.routes'))
app.use('/services',require('./routes/services.routes'))

app.listen(PORT, () => {
    console.log(`Server started on port: http://localhost:${PORT}`)
})
