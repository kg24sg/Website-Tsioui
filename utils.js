const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  console.log(user);
  return jwt.sign(
    {
      _id: user._id,
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

module.exports = generateToken;
