import { combineReducers } from "redux";
import MethodsReducer from "./method";
import PostsReducers from "./posts";
import OperationsReducer from "./operation";
import AllPostsReducer from "./allposts";

const rootReducer = combineReducers({
  posts: PostsReducers,
  methods: MethodsReducer,
  operation: OperationsReducer,
  allposts: AllPostsReducer,
});

export default rootReducer;
