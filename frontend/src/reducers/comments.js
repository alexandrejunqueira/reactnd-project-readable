import {
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  RECEIVE_COMMENTS,
  VOTE_COMMENT,
} from "../actions/comments";

export default function comments (state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS :
      return {
        ...state,
        [action.postId]: action.comments,
      };
    case ADD_COMMENT :
      return {
        ...state,
        ...state[action.comment.parentId].push(action.comment),
      };
    case VOTE_COMMENT :
    case EDIT_COMMENT :
      return {
        ...state,
        ...state[action.comment.parentId][action.comment.id] = action.comment,
      };
    case DELETE_COMMENT :
      const comments = state[action.comment.parentId]
        .filter(comment => comment.id !== action.comment.id);
      return {
        ...state,
        ...state[action.comment.parentId] = comments,
      };
    default:
      return state;
  }
}
