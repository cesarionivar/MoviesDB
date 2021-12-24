import { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

export const useGlobalState = () => useContext(GlobalContext);
