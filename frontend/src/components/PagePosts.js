import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PostList from './PostList';
import FormAddPost from './FormAddPost';
import CategoryList from './CategoryList';
import {
  handleAddPost,
  handleDislikePost,
  handleLikePost,
} from '../actions/posts';

class PagePosts extends Component {
  state = {
    postAdded: false,
    displayAddPostForm: false,
  };

  addPost = post => {
    const { dispatch } = this.props;
    dispatch(handleAddPost(post));
    this.setState({
      postAdded: true,
      displayAddPostForm: false,
    });
  };

  likePost = (postId) => {
    const { dispatch } = this.props;
    dispatch(handleLikePost(postId));
  };

  dislikePost = (postId) => {
    const { dispatch } = this.props;
    dispatch(handleDislikePost(postId));
  };

  toggleAddPostForm = (display) => {
    this.setState({ displayAddPostForm: display });
  };

  render() {
    const { posts, categories, match } = this.props;
    const { displayAddPostForm } = this.state;
    return (
      <Fragment>
        { this.state.postAdded === true && match.params.category
          ? <Redirect to="/" />
          : (
            <div className='page-posts-container'>
              {displayAddPostForm
                ? (
                <FormAddPost
                  categories={categories}
                  handleSubmit={this.addPost}
                  handleCancel={this.toggleAddPostForm}
                />
                  )
                : (
                  <Fragment>
                    <PostList
                      posts={posts}
                      category={match.params.category}
                      handleLike={this.likePost}
                      handleDislike={this.dislikePost}
                      handleToggleForm={this.toggleAddPostForm}
                    />
                    <CategoryList categories={categories} />
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

function mapStateToProps ({ posts, categories }) {
  return {
    posts: Object.keys(posts).map(key => posts[key]),
    categories: Object.keys(categories).map(key => categories[key]),
  }
}

export default connect(mapStateToProps)(PagePosts);
