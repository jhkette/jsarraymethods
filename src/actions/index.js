import { getData } from "../data/data";

export const fetchAllPosts = (ac) => async (dispatch) => {
  if(ac !== ''){
  const response = await getData();
  const x = response;
  dispatch({ type: "FETCH_ALL", payload: x.data[ac] });
  }else{
    dispatch({ type: "FETCH_ALL", payload: null });
  }
};

export const fetchPosts = (data, method) => async (dispatch) => {
  console.log(data + 'this is data')
  console.log(method + ' this is method')
  if(method != ''){
  const response = await getData();
  const x = response.data[data].filter(function (item) {
    return item.name === method;
  });
  dispatch({ type: "FETCH_POSTS", payload: x[0] });
} else{
  dispatch({ type: "FETCH_POSTS", payload: null });
}
  
    
};

export const selectMethod = (method) => {
  return { type: "GET_METHOD", payload: method };
};

// call dispatch and set method to null here?
export const selectOperation = (action) => {
  return { type: "GET_OPERATION", payload: action };
};
