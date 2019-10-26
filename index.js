const express = require('express');
const mongoose = require('mongoose');
const cookiesSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

const app = express();


//middleware
app.use(bodyParser.json());
app.use(
    cookiesSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());


require('./models/User');
require('./models/Survey');
require('./services/passport');
const authRoutes = require('./routes/authRoutes')(app);
const billingRoutes = require('./routes/billingRouters')(app);
const surveyRoutes = require('./routes/surveyRoutes')(app);


mongoose.connect(keys.mongoURI);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // Like our main.js file
    app.use(express.static('client/build'));
    // Express will serve up the index.html file
    // if it does not recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
