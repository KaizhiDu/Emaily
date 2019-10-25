const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {

    app.post('/api/stripe', async (req, res) => {
       const charge = await stripe.charges.create({
          amount: 500,
          currency: 'usd',
          description: '5 for 5 email credits',
          source: req.body.id
        });
       //user come form the passport
       req.user.credits += 5;
       const user = await req.user.save();
       // communicate with browser
       res.send(user);
    });
};