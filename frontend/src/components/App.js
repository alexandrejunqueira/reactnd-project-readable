import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import PagePosts from './PagePosts';
import PagePostDetail from './PagePostDetail';

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    const { posts, categories } = this.props;
    return (
      <Router>
        <div className='app-container'>
          <div>
            <Nav />
            {Object.keys(posts).length === 0 || categories.length === 0
              ? <span>Loading...</span>
              : <div>
                  <Route exact path='/' component={PagePosts} />
                  <Route exact path='/:category' component={PagePosts} />
                  <Route exact path='/:category/:post_id' component={PagePostDetail} />
                </div>}
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps ({ posts, categories }) {
  return {
    posts,
    categories,
  }
}

export default connect(mapStateToProps)(App);
