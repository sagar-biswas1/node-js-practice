/* title sample handler
   description: sample handler 
   author: Sagar Biswas
*/

const handler = {};
handler.sampleHandler = (requestProperties, callBack) => {
  console.log("sample handlers");

  callBack(200, { message: "this is a sample url" });
};

module.exports = handler;
