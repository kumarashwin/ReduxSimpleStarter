import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">+</Link>
        </div>
        <h2>List of all posts!</h2>
      </div>
    );
  }
}


export default connect(undefined, { fetchPosts })(Posts);