const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mailgun = require("mailgun-js");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

const api_key = '8a4a8c3bde306e6b42ed2319e3111987-1b5736a5-13f7e254';
const domain = 'sandbox94f1b9142f0b4f6aa2f4937c86bdbfe1.mailgun.org';
const mg = mailgun({ apiKey: api_key, domain: domain });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/subscribe', (req, res) => {
    const { firstname, lastname, email } = req.body;
    console.log('Received subscription request:', firstname, lastname, email);

    const data = {
        from: 'binyang sun <binyangsun@gmail.com>',
        to: email,
        subject: 'Welcome to DEV@Deakin Newsletter',
        text: `Hello ${firstname} ${lastname},\n\nThanks for subscribing to our newsletter!`
    };

    mg.messages().send(data, (error, body) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Failed to send welcome email.');
        }
        console.log('Email sent:', body);
        res.status(200).json({ message: 'Subscription successful and welcome email sent!' });
    });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
