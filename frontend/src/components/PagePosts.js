import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import CategoryList from './CategoryList';

class PagePosts extends Component {
  render() {
    const { posts, categories, match } = this.props;
    return (
      <div>
        <PostList
          posts={Object.keys(posts).map(key => posts[key])}
          category={match.params.category}
        />
        <CategoryList categories={categories} />
      </div>
    );
  };
}

function mapStateToProps ({ posts, categories }) {
  return {
    posts,
    categories,
  }
}

export default connect(mapStateToProps)(PagePosts);
