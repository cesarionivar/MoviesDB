import { createContext, useReducer } from 'react';
import { initialMoviesState, moviesReducer } from './globalReducer';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider
      value={useReducer(moviesReducer, initialMoviesState)}
    >
      {children}
    </GlobalContext.Provider>
  );
};
