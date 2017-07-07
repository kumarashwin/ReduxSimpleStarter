import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=0';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request,
  }
}

export function createPost(formData) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, formData);

  return {
    type: CREATE_POST,
    payload: request,
  }
}
