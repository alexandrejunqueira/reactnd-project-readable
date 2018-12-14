import React from 'react';
import PropTypes from 'prop-types';
import CommentListItem from './CommentListItem';

const CommentList = ({
  comments,
  handleToggle,
  handleDelete,
  handleLike,
  handleDislike
}) => (
  <div>
    {comments === null
      ? <p className="loading">Carregando comentários...</p>
      : <div>
        <h3>Comentários: {comments.length}</h3>
        <ul>
          {comments.map((comment) => <CommentListItem
            key={comment.id}
            comment={comment}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            handleLike={handleLike}
            handleDislike={handleDislike}
          />)}
        </ul>
      </div>
    }
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.array,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleDislike: PropTypes.func.isRequired,
};

CommentList.defaultPropTypes = {
  comments: [],
};

export default CommentList;
