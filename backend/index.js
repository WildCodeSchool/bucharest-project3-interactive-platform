const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const authRoute = require('./routes/authRoute')
const port = 5500;

const models = require('./models')

app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/authentication', authRoute);

models
    .sequelize
    .sync(
        // { force: true }
    )
    .then(() =>
        app.listen(process.env.PORT || port, () => console.log(`Im on ${port}`))
    )
