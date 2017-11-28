import React from 'react';

class Api {

  static logInAPI = 'http://192.168.1.247:3000/api/v2/user/login';
 
  static httpMethode = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE'
  };
  static headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
}

export default Api;