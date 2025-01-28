const responseFormatter = (req, res, next) => {
  const oldSend = res.send;

  res.send = function (data) {
    data = {
      status: res.statusCode,
      data: data,
    };
    oldSend.apply(res, arguments);
  };

  next();
};

module.exports = responseFormatter;
