import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import PagePosts from './PagePosts';
import PagePostDetail from './PagePostDetail';
import uuid from 'uuid/v1';

class App extends Component {
  componentDidMount () {
    const { handleInitialData } = this.props;
    handleInitialData();
  }
  render() {
    const { posts, categories } = this.props;
    return (
      <Router>
        <div className='app-container'>
          <Nav />
          {Object.keys(posts).length === 0 && Object.keys(categories).length === 0
            ? <div className="loading">LOADING</div>
            : <div>
                <Route exact path='/' render={props => <PagePosts {...props} key={uuid()} />} />
                <Route exact path='/:category' component={PagePosts} />
                <Route exact path='/:category/:post_id' component={PagePostDetail} />
              </div>
          }
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ posts, categories }) => {
  return {
    posts,
    categories
  }
};

const mapDispatchToProps = dispatch => ({
  handleInitialData: () => dispatch(handleInitialData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
