const axios = require('axios');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const urlHello = process.env.url;

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  let response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: '',
  };

  try {
    const responseMsg = await axios.get(urlHello);
    response.body = JSON.stringify(responseMsg.data.body);
  } catch (error) {
    response.statusCode = 500;
    response.body = JSON.stringify(error);
  }
  return response;
};
