import {
  RECEIVE_POSTS,
  EDIT_POST,
  ADD_POST,
  DELETE_POST,
  VOTE_POST,
} from "../actions/posts";

export default function posts (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS :
      return action.posts.reduce((posts, post) => {
        posts[post.id] = post;
        return posts;
      }, {});
    case ADD_POST :
    case EDIT_POST :
    case VOTE_POST :
      return {
        ...state,
        [action.post.id]: action.post,
      };
    case DELETE_POST :
      const posts = {};
      Object.keys(state)
        .forEach(key => key !== action.postId ? posts[key] = state[key] : null);
      return posts;
    default:
      return state;
  }
}
