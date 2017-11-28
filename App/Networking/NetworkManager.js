import React, {
    Component
} from 'react';
import {
    APIActions
} from '../Actions/APIActions';
import {
    actionCreators
} from '../Actions/ActionCreator';
import Api from './APIS';

export const NetworkManager = {
    get: (url) => {
        return fetch(url).then((response) => response.json()).then((responseJson) => {
            return responseJson;
        }).catch((error) => {
            return error;
        });
    },
    post: (url, httpMethode, heders, parameters) => {
        return fetch(url, {
            method: httpMethode,
            headers: Api.headers,
            body: JSON.stringify(parameters)
        }).then((response) => response.json()).then((responseJson) => {
            return responseJson;
        }).catch((error) => {
            return error;
        });
    }
}