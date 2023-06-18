'use strict';

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'post_id',
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
      },
    },
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false,
    }
  );

  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
    });

    Category.belongsToMany(BlogPost, {
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'blogPosts',
    });
  };

  return PostCategory;
};
