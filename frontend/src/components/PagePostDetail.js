import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CommentList from './CommentList';
import PostDetailed from './PostDetailed';
import FormEditPost from './FormEditPost';
import FormAddComment from './FormAddComment';
import FormEditComment from './FormEditComment';
import Page404 from './Page404';
import {
  handleEditPost,
  handleDeletePost,
  handleLikePost,
  handleDislikePost,
  handleReceivePost,
} from '../actions/posts';
import {
  handleAddComment,
  handleEditComment,
  handleDeleteComment,
  handleReceiveComments,
  handleLikeComment,
  handleDislikeComment,
} from "../actions/comments";

class PagePostDetail extends Component {
  state = {
    postDeleted: false,
    commentToEdit: null,
    displayEditPostForm: false,
    displayAddCommentForm: false,
    displayEditCommentForm: false,
  };

  componentDidMount () {
    const { post, comments, dispatch } = this.props;
    if (post && comments === null) {
      dispatch(handleReceiveComments(post.id));
    }
  }

  // Post actions

  editPost = ({ title, body }) => {
    const { post, dispatch } = this.props;
    dispatch(handleEditPost(post.id, title, body));
    this.toggleEditPostForm(false);
  };

  deletePost = () => {
    const { post, dispatch } = this.props;
    dispatch(handleDeletePost(post.id));
    this.setState({ postDeleted: true });
  };

  likePost = (postId) => {
    const { dispatch } = this.props;
    dispatch(handleLikePost(postId));
  };

  dislikePost = (postId) => {
    const { dispatch } = this.props;
    dispatch(handleDislikePost(postId));
  };

  // Comments actions

  addComment = comment => {
    const { dispatch } = this.props;
    dispatch(handleAddComment(comment));
    dispatch(handleReceiveComments(comment.parentId));
    dispatch(handleReceivePost());
    this.toggleAddCommentForm(false);
  };

  editComment = (commentId, body, timestamp) => {
    const { post, dispatch } = this.props;
    dispatch(handleEditComment(post.id, commentId, body, timestamp));
    dispatch(handleReceiveComments(post.id));
    this.toggleEditCommentForm(null);
  };

  deleteComment = comment => {
    const { dispatch } = this.props;
    dispatch(handleDeleteComment(comment));
    dispatch(handleReceivePost());
  };

  likeComment = (commentId) => {
    const { post, dispatch } = this.props;
    dispatch(handleLikeComment(commentId));
    dispatch(handleReceiveComments(post.id));
  };

  dislikeComment = (commentId) => {
    const { post, dispatch } = this.props;
    dispatch(handleDislikeComment(commentId));
    dispatch(handleReceiveComments(post.id));
  };

  // Forms toggle

  toggleEditCommentForm = (comment) => {
    this.setState({
      commentToEdit: comment,
      displayEditCommentForm: comment ? true : false,
    });
  };

  toggleAddCommentForm = (state) => {
    this.setState({
      displayAddCommentForm: state,
    });
  };

  toggleEditPostForm = (state) => {
    this.setState({
      displayEditPostForm: state,
    });
  };

  render() {
    const { post, comments } = this.props;
    const {
      displayEditPostForm,
      displayAddCommentForm,
      displayEditCommentForm
    } = this.state;

    return (
      <Fragment>
        { this.state.postDeleted === true && (
          <Redirect to="/" />
        )}
        { post === null
          ? <Page404 />
          : (
            <div className="page-post-detail-container">
              {displayEditPostForm && (
                <FormEditPost
                  post={post}
                  handleSubmit={this.editPost}
                  handleCancel={this.toggleEditPostForm}
                />
              )}
              {displayAddCommentForm && (
                <FormAddComment
                  postId={post.id}
                  handleSubmit={this.addComment}
                  handleCancel={this.toggleAddCommentForm}
                />
              )}
              {displayEditCommentForm && (
                <FormEditComment
                  comment={this.state.commentToEdit}
                  handleSubmit={this.editComment}
                  handleCancel={this.toggleEditCommentForm}
                />
              )}
              {!displayEditPostForm && !displayAddCommentForm && !displayEditCommentForm && (
                  <Fragment>
                    <PostDetailed
                      post={post}
                      handleDelete={this.deletePost}
                      handleLike={this.likePost}
                      handleDislike={this.dislikePost}
                      handleEdit={this.toggleEditPostForm}
                      handleComment={this.toggleAddCommentForm}
                    />
                    <CommentList
                      comments={comments}
                      handleDelete={this.deleteComment}
                      handleToggle={this.toggleEditCommentForm}
                      handleLike={this.likeComment}
                      handleDislike={this.dislikeComment}
                    />
                  </Fragment>
                )
              }
            </div>
          )
        }
      </Fragment>
    );
  };
}

function mapStateToProps ({ posts, comments }, { match }) {
  const postId = match.params['post_id'];
  const post = Object.keys(posts)
    .map(key => posts[key])
    .filter(post => post.id === postId)
    .shift() || null;

  return {
    post,
    comments: comments[postId] || null,
  }
}

export default connect(mapStateToProps)(PagePostDetail);
