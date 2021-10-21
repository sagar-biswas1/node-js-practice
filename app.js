/* title : node-js uptime monitoring app
 description: An app for monitoring api uptime 
author: Sagar Biswas
*/

//dependencies

const http = require("http");

const {handleReqRes}=require("./helperas/handleReqRes")
// app object - module scaffolding
const app = {};

//configuration

app.config = {
  port: 3000,
};

//create server

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);

  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

app.handleReqRes = handleReqRes;

app.createServer();
