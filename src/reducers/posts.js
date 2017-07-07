import { FETCH_POSTS } from '../actions/index'

const initialState = {
  all: [],
  post: null,
};

export default function Posts (state = initialState ,action) {
  switch(action.type){
    case FETCH_POSTS:
      return { ...state,
        all: action.payload.data
      };
    default:
      return state;
  }
}
