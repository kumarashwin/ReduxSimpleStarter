import React, { Component } from 'react';

class PostDisplay extends Component {
  render() {
    return <div>Show post {this.props.params.id}</div>
  }
}

export default PostDisplay;