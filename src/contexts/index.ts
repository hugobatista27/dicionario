import { createContext } from 'react';

export const INITIAL_STATE = {
    selectedTheme: 'light',
    selectedFont: 'san-serif'
};

export type InitialStateType = typeof INITIAL_STATE;

export const AppContext = createContext({
    state: INITIAL_STATE,
    toggleTheme: () => {}
});
