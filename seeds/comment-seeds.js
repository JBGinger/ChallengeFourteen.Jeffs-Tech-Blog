const { Comment } = require('../models');

const commentdata = [
    {
        comment_content: 'Come and see the violence inherent in the system. Help! Help! Im being repressed!',
        user_id: 2,
        post_id: 2
    },
    {
        comment_content: 'This is boring. Lets go watch a stoning.',
        user_id: 1,
        post_id: 1
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;