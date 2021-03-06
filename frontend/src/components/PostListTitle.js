import React from 'react';
import PropTypes from 'prop-types';

const PostListTitle = ({ category }) => {
  return (
    <h3>
      {category === null
        ? <span>Posts de todas as categorias</span>
        : <span>Posts da categoria: <em className="post-list-title-category">{category}</em></span>
      }
    </h3>
  );
};

PostListTitle.propTypes = {
  categoryName: PropTypes.string,
};

PostListTitle.defaultProps = {
  category: null
};

export default PostListTitle;
