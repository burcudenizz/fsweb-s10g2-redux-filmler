import {
  ADD_FAVORITE,
  TOGGLE_FAVORITES,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions.js";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };

    default:
      return state;
  }
}
