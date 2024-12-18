const express = require("express");
const bodyParser=require('body-parser');

const {PORT}=require('./config/serverConfig');

const SetupandStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.listen(PORT, () => {
    console.log(`app started at Port ${PORT}`);

  });
};

SetupandStartServer();
 