import React, { Component } from 'react';
import PostListTitle from './PostListTitle';
import PropTypes from 'prop-types';
import PostListItem from './PostListItem';
import PostListSorter from './PostListSorter';
import sortOn from 'sort-on';

class PostList extends Component {
  state = {
    sortBy: 'title',
  };

  sort = (property) => {
    this.setState({ sortBy: property });
  };

  render() {
    const { sortBy } = this.state;
    const { posts, category } = this.props;

    const filteredPosts = category === null
      ? posts
      : posts.filter(post => post.category === category);

    const sortedPosts = sortOn(filteredPosts, sortBy);

    return (
      <div>
        <PostListTitle category={category} />
        <PostListSorter handler={this.sort} value={sortBy} />
        {sortedPosts.length < 1
          ? <p>Nenhum post nesta categoria</p>
          : <ul>
            {sortedPosts.map((post) => (
              <PostListItem key={post.id} post={post} />
            ))}
          </ul>
        }
      </div>
    );
  }
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    commentCount: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
  })).isRequired,
  category: PropTypes.string,
};

PostList.defaultProps = {
  category: null,
};

export default PostList;
