import {
    APIActions
} from './APIActions';
import {
    NetworkManager
} from '../Networking/NetworkManager';
import Api from '../Networking/APIS';
import {Actions} from 'react-native-router-flux';

export const actionCreators = {
    getData: () => {
        return {
            type: APIActions.Get_Data
        }
    },
    getDataSuccess: (data) => {
        return {
            type: APIActions.Get_Data_Success,
            data
        }
    },
    getDataFailure: () => {
        return {
            type: APIActions.Get_Data_Error,
        }
    }
}

export default function request(url, httpMethode, heders, parameters) {
    if (httpMethode == Api.httpMethode.get) {
        return (dispatch) => {
            dispatch(actionCreators.getData())
            NetworkManager.get(url).then((response) => {
                dispatch(actionCreators.getDataSuccess(response))
            })
        }
    } else {
        return (dispatch) => {
            dispatch(actionCreators.getData())
            NetworkManager.post(url, httpMethode, heders, parameters).then((response) => {
                console.log('res', response)
                dispatch(actionCreators.getDataSuccess(response))
                console.log('Go home', response)
                Actions.home(response)
            }).catch((error) => {
                console.log('er', error)
            })
        }
    }
}