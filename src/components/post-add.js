import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPost } from '../actions';

class PostDisplay extends Component {
  
  static contextTypes = {
    router: PropTypes.object,
  };

  onSubmit = (props) => {
    this.props.createPost(props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const {
      fields: { title, categories, content },
      handleSubmit,
      createPost
    } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h3>Create a New Post</h3>
        <div className={`form-group ${title.touched && title.error ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className={'text-help'}>{title.touched && title.error}</div>
        </div>
        <div className={`form-group ${categories.touched && categories.error ? 'has-danger' : ''}`}>
          <label>Category</label>
          <input type="text" className="form-control" {...categories} />
          <div className={'text-help'}>{categories.touched && categories.error}</div>
        </div>
        <div className={`form-group ${content.touched && content.error ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className={'text-help'}>{content.touched && content.error}</div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title)
    errors.title = 'Enter a username!';

  if (!values.categories)
    errors.categories = 'Enter categories!';

  if (!values.content)
    errors.content = 'Enter some content!';

  return errors;
}

export default reduxForm({
  form: 'create-new-form',
  fields: ['title', 'categories', 'content' ],
  validate,
}, null, { createPost })(PostDisplay);