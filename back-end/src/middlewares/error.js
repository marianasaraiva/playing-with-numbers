const statusByErrorCode = {
  alreadyExists: 409,
  notFound: 404,
};

module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    console.log('Joi', err.message);
    return res.status(400).json({ message: err.message });
  }

  if (err.code) {
    console.log('Code', err.message);

    const status = statusByErrorCode[err.code];
    return res.status(status).json({ message: err.message });
  }

  console.log('Global', err.message, err.stack);
  return res.status(500).json({ message: 'Internal server error' });
};
