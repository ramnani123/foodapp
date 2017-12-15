import React, { Component } from 'react'
import { Text, View } from 'react-native'

export const itemsModel=(data)=>{
    console.log('items',data)
        let items = []
        // let itemData = []
        data.data.Data.forEach((item) => {
            items.push(item)
        })
        return {items}
}


// {
//     "hotel_id": "3ef14a26-a794-44d2-a009-af74d19e3a01",
//     "id": "b212f025-62d7-4cd7-ba10-1dd67b1c22ee",
//     "item_name": "Daal-Palak Ka Shorba Lentil and Spinach Soup Recipe",
//     "price": 420,
//     "type": "veg"
// }