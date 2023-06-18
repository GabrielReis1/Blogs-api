const { BlogPost, PostCategory } = require('../models');

const createPost = async (postInfo, userId) => {
  const { title, content, categoryIds } = postInfo;

  const newPost = await BlogPost.create({
    title,
    content,
    userId,
  });

  await Promise.all(
    categoryIds.map((categoryId) =>
      PostCategory.create({
        postId: newPost.id,
        categoryId,
      })),
  );

  return newPost;
};

module.exports = { createPost };