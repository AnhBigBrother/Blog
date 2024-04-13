const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require('cors')

const server = express();

// cors
const whitelist = ['http://localhost:4000', 'http://localhost:5173']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// middleware
server.use(cors(corsOptions));
server.use(cookieParser());
server.use(express.json());
server.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// environment
require("dotenv").configDotenv();
const dbURI = process.env.DBURI;
const Port = process.env.PORT;

// connect
mongoose
  .connect(dbURI)
  .then(() => {
    server.listen(Port);
    console.log(`Connected to database, server is listening on port ${Port}`);
  })
  .catch((err) => console.log(err));

// router
server.use("/api/v1/blogs", require("./routers/v1/blogRouter"));
server.use("/api/v1/auth", require("./routers/v1/authRouter"));
