import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  movieReducer: movieReducer,
  favoritesReducer: favoritesReducer,
});

export default rootReducer;
