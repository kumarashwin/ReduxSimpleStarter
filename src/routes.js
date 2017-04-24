import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Posts from './components/posts';
import PostAdd from './components/post-add';
import PostDisplay from './components/post-display';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ Posts } />
    <Route path="posts/new" component={ PostAdd } />
    <Route path="posts/:id" component={ PostDisplay } />
  </Route>
);
