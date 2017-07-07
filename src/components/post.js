import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

class Post extends Component {
  render() {
    const {
      fields: {
        title,
        categories,
        content
      },
      handleSubmit
    } = this.props;
    return(
      <form onSubmit={ handleSubmit }>
        <h3>Create a New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input type="text" className="form-control" {...categories} />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'create-new-form',
  fields: ['title', 'categories', 'content' ],

})(Post);