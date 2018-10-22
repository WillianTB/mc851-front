
export const REMOVE_CART = 'REMOVE_CART'
export const ADD_CART = 'ADD_CART'
export const CLEAN_CART = 'CLEAN_CART'

export function addCart(product_item) {
    return {
      type: ADD_CART,
      product_item
    }
  }

  export function removeCart(product_item) {
    return {
      type: REMOVE_CART,
      product_item
    }
  }

  export function cleanCart() {
    return {
      type: CLEAN_CART,
    }
  }