const { Post } = require('../models');

const postdata = [
  {
    title: 'Hello World',
    post_content: 'Hello there',
    user_id: 1
  },
  {
    title: 'Blah Blah Blah',
    post_content: 'This is a test',
    user_id: 2
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
