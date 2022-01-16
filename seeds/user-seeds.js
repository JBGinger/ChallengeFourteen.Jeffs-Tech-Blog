const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'JBGinger',
        password: 'password123'
    },
    {
        username: 'TestUser',
        password: 'password123'
    },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;