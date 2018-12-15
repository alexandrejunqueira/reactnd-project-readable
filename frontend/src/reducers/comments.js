import {
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  RECEIVE_COMMENTS,
  VOTE_COMMENT,
} from "../actions/comments";

export default function comments (state = {}, action) {
  let updatedComments;
  switch (action.type) {
    case RECEIVE_COMMENTS :
      return {
        ...state,
        [action.postId]: action.comments,
      };
    case ADD_COMMENT :
      updatedComments = [...state[action.comment.parentId]];
      updatedComments.push(action.comment);
      return {
        ...state,
        [action.comment.parentId]: updatedComments,
      };
    case VOTE_COMMENT :
    case EDIT_COMMENT :
      updatedComments = [...state[action.comment.parentId]]
        .filter(comment => comment.id !== action.comment.id);
      updatedComments.push(action.comment);
      return {
        ...state,
        [action.comment.parentId]: updatedComments,
      };
    case DELETE_COMMENT :
      updatedComments = [...state[action.comment.parentId]]
        .filter(comment => comment.id !== action.comment.id);
      return {
        ...state,
        [action.comment.parentId]: updatedComments,
      };
    default:
      return state;
  }
}
