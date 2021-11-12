const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const dotenv = require('dotenv');
const routerApi = require('./routes/_api');
const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./middlewares/errorHandler');

dotenv.config();

// Body parser limit
app.use(express.json({ limit: '50mb' }));

// Cors
app.use(cors());

// Routes
routerApi(app);

// Error middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port: ' + port);
});
