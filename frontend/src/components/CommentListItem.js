import React from 'react';
import PropTypes from 'prop-types';
import { formatCommentInfo } from "../utils/helpers";

const CommentListItem  = ({
    comment,
    handleToggle,
    handleDelete,
    handleLike,
    handleDislike,
}) => (
  <li className="comment-list-item-container">
    <p className="comment-title">{comment.body}</p>
    <p className="comment-info">{formatCommentInfo(comment)}</p>
    <div className="comment-buttons">
      <button onClick={() => handleToggle(comment)}>EDITAR</button>
      <button onClick={() => handleDelete(comment)}>REMOVER</button>
      <button onClick={() => handleLike(comment.id)}>LIKE</button>
      <button onClick={() => handleDislike(comment.id)}>DISLIKE</button>
    </div>
  </li>
);

CommentListItem.propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    deleted: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    parentDeleted: PropTypes.bool.isRequired,
    parentId: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
  }).isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleDislike: PropTypes.func.isRequired,
};

export default CommentListItem;
