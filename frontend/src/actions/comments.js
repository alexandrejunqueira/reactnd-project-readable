import * as API from '../utils/api';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const VOTE_COMMENT = 'VOTE_COMMENT';

// Receive Comments

export function receiveComments (postId, comments) {
  return {
    type: RECEIVE_COMMENTS,
    postId,
    comments,
  }
}

export function handleReceiveComments (postId) {
  return (dispatch) => {
    return API.fetchComments(postId)
      .then(comments => dispatch(receiveComments(postId, comments)));
  };
}

// Add Comment

export function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}

export function handleAddComment (comment) {
  return (dispatch) => {
    return API.addComment(comment)
      .then(comment => dispatch(addComment(comment)));
  };
}

// Edit Comment

export function editComment (comment) {
  return {
    type: EDIT_COMMENT,
    comment,
  }
}

export function handleEditComment (postId, commentId, body, timestamp) {
  return (dispatch) => {
    return API.editComment(commentId, body, timestamp)
      .then(comment => dispatch(editComment(comment)));
  };
}

// Delete Comment

export function deleteComment (comment) {
  return {
    type: DELETE_COMMENT,
    comment,
  }
}

export function handleDeleteComment (comment) {
  return (dispatch) => {
    return API.deleteComment(comment.id)
      .then(comment => dispatch(deleteComment(comment)));
  };
}

// Vote Comment

function voteComment(commentId, option) {
  return (dispatch) => {
    API.voteComment(commentId, option)
      .then(comment => dispatch(
        {
          type: VOTE_COMMENT,
          comment,
        }
      ));
  }
}

export function handleLikeComment(commentId) {
  return voteComment(commentId, 'upVote');
}

export function handleDislikeComment(commentId) {
  return voteComment(commentId, 'downVote');
}
