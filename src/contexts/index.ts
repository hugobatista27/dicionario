import { createContext } from 'react';

export const INITIAL_STATE = {
    selectedTheme: 'light',
    selectedFont: 'serif'
};

export type InitialStateType = typeof INITIAL_STATE;

export const AppContext = createContext({
    state: INITIAL_STATE,
    toggleTheme: () => {},
    changeFont: (font: string) => {}
});
