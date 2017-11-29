import React, { Component } from 'react';
import { APIActions } from '../Actions/APIActions';
import { actionCreators } from '../Actions/ActionCreator';
import Api from './APIS';
import { create } from 'apisauce';
import { httpMethodes, headers } from '../Constants/Constants';

const baseApi = create({
    baseURL: 'http://192.168.1.247:3000/api/v2/',
    timeout: 30000
})

export const NetworkManager = {
    request: (url, httpMethode, parameters) => {
        switch (httpMethode) {
            case httpMethodes.get:
                return
                baseApi.get(url).then((response) => {
                    return response
                })
            case httpMethodes.post:
                return baseApi.post(url, parameters, headers).then((response) => {
                    return response
                })
            case httpMethodes.put:
                return baseApi.put(url, parameters, headers).then((response) => {
                    return response
                })
            case httpMethodes.delete:
                return baseApi.delete(url, parameters, headers).then((response) => {
                    return response
                })
        }
    }
}