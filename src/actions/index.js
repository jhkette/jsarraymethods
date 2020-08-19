import { getData } from "../data/data";

export const fetchAllPosts = (ac) => async (dispatch) => {
  const response = await getData();
  const x = response;
  dispatch({ type: "FETCH_ALL", payload: x.data[ac] });
};

export const fetchPosts = (data, method) => async (dispatch) => {
  const response = await getData();

  const x = response.data[data].filter(function (item) {
    return item.name === method;
  });
  dispatch({ type: "FETCH_POSTS", payload: x[0] });
};

export const selectMethod = (method) => {
  return { type: "GET_METHOD", payload: method };
};

export const selectOperation = (action) => {
  return { type: "GET_OPERATION", payload: action };
};
