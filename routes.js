/* title: all router
   description: all routes
   author: Sagar Biswas
*/


// dependencies
const { sampleHandler } = require("./handlers/routerHandler/sampleHandler");
// const { notFoundHandler } = require("./handlers/routerHandler/notFoundHandler");

const route = {
  sample: sampleHandler,
};

module.exports = route;
