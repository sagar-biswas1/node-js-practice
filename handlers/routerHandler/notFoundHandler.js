/* title :404 handler
   description: 404 handler 
   author: Sagar Biswas
*/

const handler = {};
handler.notFoundHandler = (requestProperties, callBack) => {
  console.log("not found handlers");
   callBack(404, { message: "url not found" });
};

module.exports = handler;
