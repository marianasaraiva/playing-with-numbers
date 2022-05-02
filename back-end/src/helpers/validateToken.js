const jwt = require('jsonwebtoken');

module.exports = async (token) => {
  try {
    const { payload } = jwt.verify(token, process.env.JWT_SECRET);
    
    return payload;
  } catch (error) {
    return null;
  }
};