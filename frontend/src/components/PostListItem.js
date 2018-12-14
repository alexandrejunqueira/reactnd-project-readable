import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { formatPostInfo } from "../utils/helpers";

const PostListItem = ({ post, handleLike, handleDislike }) => {
  return (
    <li>
      <div className="post-list-item-container">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-info">{formatPostInfo(post)}</p>
        <p className="post-info">Comentários: {post.commentCount} - Votos: {post.voteScore}</p>
        <div className="post-buttons">
          <NavLink className="post-details-link" to={`/${post.category}/${post.id}`}>
            DETALHES
          </NavLink>
          <button onClick={() => handleLike(post.id)}>
            LIKE
          </button>
          <button onClick={() => handleDislike(post.id)}>
            DISLIKE
          </button>
        </div>
      </div>
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
  handleLike: PropTypes.func.isRequired,
  handleDislike: PropTypes.func.isRequired,
};

export default PostListItem;
