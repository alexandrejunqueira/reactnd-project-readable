import * as API from '../utils/api';
import { receivePosts } from "./posts";
import { receiveCategories } from "./categories";

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([
      API.fetchPosts(),
      API.fetchCategories(),
    ])
      .then(([posts, categories]) => {
        dispatch(receivePosts(posts));
        dispatch(receiveCategories(categories));
      });
  };
};
