/* eslint-disable */
const fetch = require('node-fetch');
exports.handler = async function(event, context) {
  let path = event.queryStringParameters.path || null;
  if (!path)
    return {
      statusCode: 400,
      body: 'you must specify a path parameter'
    };
  if (path.startsWith('https://')) path = path.slice(8);
  if (path.startsWith('http://')) path = path.slice(7);
  try {
    const server = await fetch(`https://${path}`).then((res) => {
      let obj = {};
      res.headers.forEach((v, k) => (obj[k] = v));
      return obj;
    });

    return {
      statusCode: 200,
      body: JSON.stringify(server)
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};
