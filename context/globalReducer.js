import { types } from '../types';

export const initialMoviesState = {
  movies: [],
  loading: true,
};

export const moviesReducer = (state, action) => {
  switch (action.type) {
    case types.loadMovies:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };

    case types.setLoading:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
