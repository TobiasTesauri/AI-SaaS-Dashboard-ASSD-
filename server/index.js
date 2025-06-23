const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./api/routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRoutes);

const PORT = 3001;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));