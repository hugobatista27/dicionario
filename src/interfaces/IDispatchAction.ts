import { AppContextActions } from '../enums/AppContextActions';

export interface IDispatchAction  {
    type: AppContextActions;
    peyload?: any;
}