import { getData } from "../data/data";


export const fetchPosts = (data, method) => async (dispatch) => {
    const response = await getData()
    const x =response.data[data].filter(function(item){
        return item.name === method;})      
    dispatch({type: "FETCH_POSTS", payload: x[0]});
 };

 export const selectMethod = (value) => {

    return {type: "GET_METHOD", payload: value}
 }