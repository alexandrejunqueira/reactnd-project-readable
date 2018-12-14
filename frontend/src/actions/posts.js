import * as API from '../utils/api';

export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const RECEIVE_POSTS = 'FETCH_POSTS';
export const VOTE_POST = 'VOTE_POST';

// Receive Posts

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

export function handleReceivePost() {
  return (dispatch) => {
    API.fetchPosts()
      .then(posts => dispatch(receivePosts(posts)));
  }
}

// Add Post

export function addPost (post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function handleAddPost(post) {
  return (dispatch) => {
    API.addPost(post)
      .then(post => dispatch(addPost(post)));
  }
}

// Edit Post

export function editPost (post) {
  return {
    type: EDIT_POST,
    post,
  }
}

export function handleEditPost(postId, title, body) {
  return (dispatch) => {
    API.editPost(postId, title, body)
      .then(post => dispatch(editPost(post)));
  }
}

// Delete Post

export function deletePost (postId) {
  return {
    type: DELETE_POST,
    postId
  }
}

export function handleDeletePost(postId) {
  return (dispatch) => {
    API.deletePost(postId)
      .then(dispatch(deletePost(postId)));
  }
}

// Vote Post

function votePost(postId, option) {
  return (dispatch) => {
    API.votePost(postId, option)
      .then(post => dispatch(
        {
          type: VOTE_POST,
          post,
        }
      ));
  }
}

export function handleLikePost(postId) {
  return votePost(postId, 'upVote');
}

export function handleDislikePost(postId) {
  return votePost(postId, 'downVote');
}

