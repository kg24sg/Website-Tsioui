const bcrypt = require('bcryptjs');
module.exports = {
  users: [
    {
      name: 'Constantina Georgiou',
      email: 'admin@hotmail.com',
      password: bcrypt.hashSync('132456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@hotmail.com',
      password: bcrypt.hashSync('132456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim Shirt1',
      slug: 'nike-slim-shirt1',
      category: 'Shirts',
      image: '/images/p1.jpg', //679 * 829
      price: 120,
      countInStock: 12,
      description: 'high quality products',
    },
    {
      // _id: '2',
      name: 'Nike Slim Shirt2',
      slug: 'nike-slim-shirt2',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 80,
      countInStock: 0,
      description: 'high quality products',
    },
    {
      // _id: '3',
      name: 'Nike Slim Shirt3',
      slug: 'nike-slim-shirt3',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 90,
      countInStock: 9,
      description: 'high quality products',
    },
    {
      // _id: '4',
      name: 'Nike Slim Shirt4',
      slug: 'nike-slim-shirt4',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      description: 'high quality products',
    },
  ],
};
