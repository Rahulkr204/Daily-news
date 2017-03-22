import request from 'superagent';

// ------------------------------------
// Constants
// ------------------------------------
const KEY = '47c855a0cf9548d59e4a36d2e3872db4'
export const ON_FETCH_DATA = 'ON_FETCH_DATA'
export const ON_FETCH_SOURCE = 'ON_FETCH_SOURCE'
export const IS_SOURCE_LOADING = 'IS_SOURCE_LOADING'
export const ON_CLICK_FETCH_NEWS = 'ON_CLICK_FETCH_NEWS'

// ------------------------------------
// Actions
// ------------------------------------
export const onFetchData = (value)=>{
  return { type: ON_FETCH_DATA, payload: value }
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


export const fetchData = () => {       //Fetch kcs thunk
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      dispatch(isSourceLoading(true));
      request
      .get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
      .send()
      .end(function(err, res){
        if(!err){
          let response = JSON.parse(res.text);
          dispatch(onFetchData(response.feed));
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
  [ON_FETCH_DATA]:(state,action) => {
    let data = Object.assign({}, state.data, action.payload);
    let newState = Object.assign({}, state, { data : data});
    return newState;
  },
  [IS_SOURCE_LOADING]:(state,action) => {
    let newState = Object.assign({}, state, {isLoading:action.payload});
    return newState;
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data:{},
  isLoading:false
}

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
