import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    return this.props.posts.map(post => (
      <Link to={`posts/${post.id}`} key={post.id}>
        <li className="list-group-item">
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </li>
      </Link>
    ));
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">+</Link>
        </div>
        <h3>List of all posts!</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all,
  };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);