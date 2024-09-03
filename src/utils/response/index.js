const RESPONSE = {
  ok(message = "", data) {
    return {
      statusCode: 200,
      message,
      data,
    };
  },
};

module.exports = RESPONSE;
