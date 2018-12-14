import React, { Component } from 'react';
import PropTypes from "prop-types";
import { formatDetailedPostInfo } from "../utils/helpers";

class PostDetailed extends Component {
  render() {
    const { post, handleEdit, handleDelete, handleComment, handleLike, handleDislike } = this.props;
    return (
      <div className="post-detailed-container">
        <div>
          <h3 className="post-title">{post.title}</h3>
          <p className="post-info">{formatDetailedPostInfo(post)}</p>
          <p className="post-body">{post.body}</p>
        </div>
        <div className="post-buttons">
          <button onClick={() => handleEdit(true) }>EDITAR</button>
          <button onClick={handleDelete}>REMOVER</button>
          <button onClick={() => handleComment(true)}>COMENTAR</button>
          <button onClick={() => handleLike(post.id)}>LIKE</button>
          <button onClick={() => handleDislike(post.id)}>DISLIKE</button>
        </div>
      </div>
    );
  };
}

PostDetailed.propTypes = {
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
  handleDelete: PropTypes.func.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleDislike: PropTypes.func.isRequired,
  handleComment: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default PostDetailed;
