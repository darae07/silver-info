const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/users');
const dataRouter = require('./routes/data');
const cors = require('cors');

const app = express();
const port = 8080;

let corsOpt = {
    origin: [
        'http://localhost:3000',
    ],
    methods: ['POST', 'GET', 'DELETE', 'PUT'],
    credentials: true,
};
app.use(express.json());
app.use(cors(corsOpt));
app.use(
    session({
        secret: 's!lve2r!',
        resave: false,
        cookie: { maxAge: 3600000 },
        rolling: true,
        saveUninitialized: true,
    })
);
app.use(cookieParser());

const root = '/';

app.get(root, (req, res) => {
    res.status(200).end('hi!');
});

app.use('/users', userRouter);
app.use('/data', dataRouter);

app.set('port', port);
app.listen(app.get('port'), () => {
    console.log(`app is listening in PORT ${app.get('port')}`);
});

module.exports = app;
