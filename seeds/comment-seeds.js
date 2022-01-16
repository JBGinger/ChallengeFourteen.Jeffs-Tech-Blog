const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Hello Stuff.',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Hello Stuff Again.',
        user_id: 1,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;