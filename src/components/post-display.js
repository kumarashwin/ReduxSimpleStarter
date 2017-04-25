import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPost, deletePost } from '../actions';

class PostDisplay extends Component {
  
  static contextTypes = {
    router: PropTypes.object,
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick = () => {
    const { deletePost, post } = this.props;
    this.props.deletePost(this.props.post.id)
      .then(() => {
        this.context.router.push('/');
      });;
  }

  render() {
    const { post } = this.props;
    return (post && post.id == this.props.params.id) ? (
      <div>
        <Link to="/">Back to list of posts</Link>
        <button
          onClick={this.onDeleteClick}
          className="btn btn-danger pull-xs-right"
         >Delete</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div> 
    ) : (
      <div>Loading...</div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.post,  
});

export default connect(mapStateToProps, { fetchPost, deletePost })(PostDisplay);