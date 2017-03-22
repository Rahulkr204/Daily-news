import request from 'superagent';

// ------------------------------------
// Constants
// ------------------------------------
const KEY = '47c855a0cf9548d59e4a36d2e3872db4'
export const ON_FETCH = 'ON_FETCH'
export const ON_FETCH_SOURCE = 'ON_FETCH_SOURCE'
export const IS_SOURCE_LOADING = 'IS_SOURCE_LOADING'
export const ON_CLICK_FETCH_NEWS = 'ON_CLICK_FETCH_NEWS'

// ------------------------------------
// Actions
// ------------------------------------
export const onFetch = (value)=>{
  return { type: ON_FETCH, payload: value }
}
export const onFetchSources = (value)=>{
  return { type: ON_FETCH_SOURCE, payload: value }
}
export function isSourceLoading(data){
  return {type: IS_SOURCE_LOADING,payload:data}
}
export const onClickFetchNews = (value)=>{
  return { type: ON_CLICK_FETCH_NEWS, payload: value }
}

export const onClickSourceFetchNews = (params) => {       //Fetch kcs thunk
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      request
      .get('https://newsapi.org/v1/articles?source='+params+'&apiKey='+KEY)
      .send()
      .end(function(err, res){
        if(!err){
          dispatch(onClickFetchNews(res.body));
          resolve();
        }
      });
    });
  }
}
// '+{params}+'
export const onSourceChange = (params) => {       //Fetch kcs thunk
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      dispatch(isSourceLoading(true));
      request
      .get('https://newsapi.org/v1/sources?language=en')
      .send()
      .end(function(err, res){
        if(!err){
          dispatch(onFetchSources(res.body));
          dispatch(isSourceLoading(false));
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
  [ON_FETCH_SOURCE]:(state,action) => {
    let source = Object.assign({}, state.source, action.payload);
    let newState = Object.assign({}, state, { source : source});
    return newState;
  },
  [ON_CLICK_FETCH_NEWS]:(state,action) => {
    let news = Object.assign({}, state.news, action.payload);
    let newState = Object.assign({}, state, { news : news});
    return newState;
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  news:{},
  source:{},
  isSourceLoading:false
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
