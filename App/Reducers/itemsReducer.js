import {
    APIActions
} from '../Actions/APIActions';
import {
    NetworkManager
} from '../Networking/NetworkManager';
import ReduxThunk from 'redux-thunk';
import actionCreators from '../Actions/ActionCreator';

const initialState = {
    getItems: false,
    result: []
}

export function ItemsReducer(state = initialState, action) {
    switch (action.type) {
        case APIActions.Get_Data:
            return {
                ...state,
                getItems: true,
                result: []
            }
        case APIActions.Get_Data_Success:
            return {
                ...state,
                getItems: false,
                result: action.data
            };
        case APIActions.Get_Data_Error:
            return {
                ...state,
                getItems: false,
                result: []
            };
        default:
            return state;
    }
}