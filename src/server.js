import app from './app';

require('dotenv').config();

const port = process.env.APP_PORT;
app.listen(port);
