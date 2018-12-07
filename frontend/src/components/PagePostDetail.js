import React, { Component } from 'react';
import { connect } from 'react-redux';

class PagePostDetail extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        <h3>{post.title}</h3>
      </div>
    );
  };
}

function mapStateToProps ({ posts, categories }, { match }) {
  const post = Object.keys(posts)
    .map(key => posts[key])
    .filter(post => post.id === match.params['post_id'])
    .shift();

  return {
    post,
    categories,
  }
}

export default connect(mapStateToProps)(PagePostDetail);
