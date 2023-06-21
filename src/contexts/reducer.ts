import { INITIAL_STATE, InitialStateType } from ".";
import { IDispatchAction } from "../interfaces/IDispatchAction";
import { AppContextActions } from "../enums/AppContextActions"

export const appContextReducer = (
    state = INITIAL_STATE, 
    action: IDispatchAction
): InitialStateType => {

    let tmpState = { ...state };

    switch (action.type) {
        case AppContextActions.ToggleTheme:
            tmpState.selectedTheme = state.selectedTheme === 'light' ? 'dark' : 'light'
            break;
        case AppContextActions.SelectedFont:
            tmpState.selectedFont = action.payload
            break;
        case AppContextActions.SearchedWord:
            tmpState.searchedWord = action.payload
            break
        default:
            throw new Error();
    }
    return tmpState
}