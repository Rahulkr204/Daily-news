import request from 'superagent';

// ------------------------------------
// Constants
// ------------------------------------
const KEY = '34bb5c58'
export const ON_FETCH = 'ON_FETCH'
export const ON_FETCH_SOURCE = 'ON_FETCH_SOURCE'
export const ON_FETCH_MOVIES = 'ON_FETCH_MOVIES'
export const CHANGE_TITLE = 'CHANGE_TITLE'
export const IS_LOADING = 'IS_LOADING'

// ------------------------------------
// Actions
// ------------------------------------
export const onFetch = (value)=>{
  return { type: ON_FETCH, payload: value }
}
export const onFetchMovies = (value)=>{
  return { type: ON_FETCH_MOVIES, payload: value }
}
export function isLoading(data){
  return {type: IS_LOADING,payload:data}
}
export const handleTitleText = (value)=>{
  return { type: CHANGE_TITLE, payload: value }
}

export const fetchMovies = (params) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      dispatch(isLoading(true))
      request
      .get('https://www.omdbapi.com/?s=' + params)
      .send()
      .end(function(err, res){
        if(!err){
          if (res.body.Response) {
            dispatch(onFetchMovies(res.body))
            dispatch(isLoading(false))
          }
          dispatch(isLoading(true))
          resolve();
        }
      });
    });
  }
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ON_FETCH]:(state,action) => {
    let news = Object.assign({}, state.news, action.payload);
    let newState = Object.assign({}, state, { news : news});
    return newState;
  },
  [ON_FETCH_MOVIES]:(state,action) => {
    let movies = Object.assign({}, state.movies, action.payload);
    let newState = Object.assign({}, state, { movies : movies});
    return newState;
  },
  [CHANGE_TITLE]:(state,action) => {
    let title = Object.assign({}, state.title, action.payload);
    let newState = Object.assign({}, state, { title : title});
    return newState;
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  movies:{},
  title:'',
  isLoading:false
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
