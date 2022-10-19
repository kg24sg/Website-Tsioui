const jwt = require('jsonwebtoken');

export const getError = (error) => {
  console.log(error);
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user.googleId,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    'tsiouiwebsite',
    {
      expiresIn: '30d',
    }
  );
};
