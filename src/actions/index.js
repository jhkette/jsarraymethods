import { getData } from "../data/data";


export const fetchPosts = () => async (dispatch) => {
    const response = await getData()
    dispatch({type: "FETCH_POSTS", payload: response.data});
 };