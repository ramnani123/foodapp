import React from 'react';

class Api {
  static logInAPI = 'users/login/';
  static otpVerifivation = 'users/verification/';
  static registration = 'users/signup/';
  static hotelList = 'hotels';
  static listOfTablesInHotel = 'hotels/tables/3ef14a26-a794-44d2-a009-af74d19e3a01';
  static itemsInHotel = 'hotel/list/items/3ef14a26-a794-44d2-a009-af74d19e3a01';
  // static orderList = '/hotels/user/orderList/31af384f-346b-4063-b63a-5fbb81b8cc88'
  static preboking = 'preboking/hotels/table'
  static orderList = 'preboking/user/table/31af384f-346b-4063-b63a-5fbb81b8cc88'
}

export default Api;