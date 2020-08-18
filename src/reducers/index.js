import { combineReducers } from "redux";
import MethodsReducer from "./method";
import PostsReducers from "./posts";
import OperationsReducer from './operation'



const rootReducer = combineReducers({
    posts: PostsReducers,
    methods: MethodsReducer,
    operation: OperationsReducer
  });
  
  export default rootReducer;