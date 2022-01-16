const { Post } = require('../models');

const postdata = [
  {
    title: 'Hello World',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 1
  },
  {
    title: 'Blah Blah Blah',
    post_url: 'https://nasa.gov/donec.json',
    user_id: 2
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
