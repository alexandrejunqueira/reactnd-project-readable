import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const PostListItem = ({ post }) => {
  return (
    <li>
      <NavLink to={`/${post.category}/${post.id}`}>
        {post.title}
      </NavLink>
    </li>
  );
};

PostListItem.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    commentCount: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
  }).isRequired,
};

export default PostListItem;
