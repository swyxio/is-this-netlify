/* eslint-disable */
const fetch = require("node-fetch")
exports.handler = async function(event, context) {
  const path = event.queryStringParameters.path || null
  if (!path)
    return {
      statusCode: 400,
      body: "you must specify a path parameter"
    }
  try {
    const server = await fetch(`https://${path}`).then((res) => {
      return {
        server: res.headers.get("server"),
        nfrid: res.headers.get("x-nf-request-id")
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify(server)
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
