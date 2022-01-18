const { Post } = require('../models');

const postdata = [
  {
    title: 'Python Monty',
    post_content: 'All right, but apart from the sanitation, medicine, education, wine, public order, irrigation, roads, the fresh water system and public health, what have the Romans ever done for us?',
    user_id: 1
  },
  {
    title: 'Monty Python',
    post_content: 'Listen, strange women lyin in ponds distributin swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony.',
    user_id: 2
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
