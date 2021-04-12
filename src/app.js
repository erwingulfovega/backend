const express = require('express');
const cors    = require('cors');
const app     = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))
app.use('/api/recursos', require('./routes/recursos'))
app.use('/api/tipos', require('./routes/tipos'))
app.use(express.static(path.join(__dirname, 'client/build')));

module.exports= app; 