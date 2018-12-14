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
    const {
      posts,
      category,
      handleLike,
      handleDislike,
      handleToggleForm,
    } = this.props;

    const filteredPosts = category === null
      ? posts
      : posts.filter(post => post.category === category);

    const sortedPosts = sortOn(filteredPosts, sortBy);

    return (
      <div className="post-list-container">
        <PostListTitle category={category} />
        <PostListSorter
          handler={this.sort}
          value={sortBy}
          disabled={sortedPosts.length < 2}
        />
        {sortedPosts.length < 1
          ? <p>Nenhum post</p>
          : (
            <div>
              <ul>
                {sortedPosts.map((post) => (
                  <PostListItem
                    key={post.id}
                    post={post}
                    handleLike={handleLike}
                    handleDislike={handleDislike}
                  />
                ))}
              </ul>
            </div>
          )
        }
        <button onClick={() => handleToggleForm(true)}>
          ADICIONAR POST
        </button>
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
  handleLike: PropTypes.func.isRequired,
  handleDislike: PropTypes.func.isRequired,
  handleToggleForm: PropTypes.func.isRequired,
};

PostList.defaultProps = {
  category: null,
};

export default PostList;
