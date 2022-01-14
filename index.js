import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import  jsonwebtoken from "jsonwebtoken";

import route from "./routes/index.js";
const app = express();
mongoose.connect("mongodb://localhost:27017/resful_db");
const db = mongoose.connection;
db.on('error',(error)=> console.error(error));
db.on('open',()=> console.log('database connect bang'));

//biar  bisa di taro di body postman
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//jwt setting 
app.use(function(req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
      jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      });
    } else {
      req.user = undefined;
      next();
    }
  });
//next di gunakan untuk skip program

//membuiat route menjadi /api dan membaca ke route
app.use('/api',route);

//port
app.listen('3000',()=> console.log('Server Running'));
