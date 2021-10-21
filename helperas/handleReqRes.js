/* title :handle req and response
   description: handle req and res 
   author: Sagar Biswas
*/
//dependency
const url = require("url");
const { StringDecoder } = require("string_decoder");



// module scaffolding
const handler={}

handler.handleReqRes = (req, res) => {
  //req handling
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  //getting methods type
  const method = req.method.toLowerCase();
  //getting query params
  const queryString = parseUrl.query;
  //getting req from header
  const headerObject = req.headers;

  console.log(headerObject);
  // code for handling body request...
  const decoder = new StringDecoder("utf-8");
  let realData = "";
  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);
    res.end("hello world");
  });

  // --------------------------//
};



module.exports=handler