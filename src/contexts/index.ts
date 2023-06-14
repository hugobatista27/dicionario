import { createContext } from 'react';
import { FONTS_OPTIONS } from '../styles/fonts';

export const INITIAL_STATE = {
    selectedTheme: 'light',
    selectedFont: FONTS_OPTIONS[0].fontName,
    searchedWord: {} as any
};

export type InitialStateType = typeof INITIAL_STATE;

export const AppContext = createContext({
    state: INITIAL_STATE,
    toggleTheme: () => {},
    changeFont: (font: string) => {},
    setSearchResult: (word: any) => {}
});
