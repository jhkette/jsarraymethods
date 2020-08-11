<<<<<<< HEAD
export default (state =[], action) => {
    switch(action.type){
        case 'FETCH_POSTS':
           return action.payload;
        case 'GET_METHOD':
            return action.payload;
        default: 
        return state;
     
=======
import { combineReducers } from "redux";
import MethodsReducer from "./method";
import PostsReducers from "./posts";
>>>>>>> reducerfix



const rootReducer = combineReducers({
    posts: PostsReducers,
    methods: MethodsReducer
  });
  
  export default rootReducer;