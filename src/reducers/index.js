import { combineReducers } from "redux";
import MethodsReducer from "./method";
import PostsReducers from "./posts";



const rootReducer = combineReducers({
    posts: PostsReducers,
    methods: MethodsReducer
  });
  
  export default rootReducer;