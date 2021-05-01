const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "127.0.0.1"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'remotemysql.com',
    user: '3pIpxTIgwj',
    database: '3pIpxTIgwj',
    password: 'BRoHvfQdou',
});

/*connection.query('SELECT * FROM clients', function (err, results) {
    if (err) {
        console.error(err);
    }
    console.log(results);
})*/

app.get('/', function (req,res) {
    connection.query('SELECT * FROM clients', function (err, results) {
        if (err) {
            console.error(err);
        }
        else {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.json(results);
        }
    });
});

app.get('/genres', function (req,res) {
    connection.query('SELECT * FROM genres', function (err, results) {
        if (err) {
            console.error(err);
        }
        else {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.json(results);
        }
    });
});

app.get('/clients', function (req,res) {
    connection.query('SELECT * FROM clients', function (err, results) {
        if (err) {
            console.error(err);
        }
        else {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.json(results);
        }
    });
});


app.listen(3001, () => {
    console.log('started on Port 3001');
});