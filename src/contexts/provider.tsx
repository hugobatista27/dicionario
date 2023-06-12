import { ReactNode, useReducer, useCallback } from 'react';
import { AppContext, INITIAL_STATE } from ".";
import { appContextReducer } from "./reducer"
import { AppContextActions } from '../enums/AppContextActions';

interface IProps {
    children: ReactNode;
}

export const AppContextProvider = ({ children } : IProps) => {
    const [state, dispatch] = useReducer(appContextReducer, INITIAL_STATE)

    const toggleTheme = useCallback(() => {
        dispatch({
            type: AppContextActions.ToggleTheme,
        })
    }, [dispatch]);

    return (
        <AppContext.Provider value={{state, toggleTheme}}>
            {children}
        </AppContext.Provider>
    )
}