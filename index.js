const express = require('express');
const mongoose = require('mongoose');
const cookiesSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const app = express();

app.use(
    cookiesSession({
        maxAge: 24 * 60 *60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./models/User');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
authRoutes(app);

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;

// listen the port
app.listen(PORT);
