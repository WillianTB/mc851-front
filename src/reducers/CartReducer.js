import { combineReducers } from 'redux'

import {REMOVE_CART, ADD_CART, CLEAN_CART} from '../actions/CartAction';

const initialState = [];

export const cartState = (cartList = initialState, action) => {
    switch (action.type) {
      case REMOVE_CART:
        return cartList
    case ADD_CART:
        return [
            ...cartList,
            action.product_item
        ]
    case CLEAN_CART:
        return []
    default:
        return cartList
    }
  }



const CartReducer = combineReducers({
    cartState,
  })

  export default CartReducer;