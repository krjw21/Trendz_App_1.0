import { createStore } from 'redux';

// 1. actions
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_WHOLE_CART = 'REMOVE_WHOLE_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';

// 2. action creators
export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        item
    }
}
export const removeWholeCart = (item) => {
    return {
        type: REMOVE_WHOLE_CART,
        item
    }
}
export const removeItem = (item) => {
    return {
        type: REMOVE_ITEM,
        item
    }
}

// 3. reducer
var initialState = {
    cartItems: [],
    orderTotal: 0
}

var shop = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // checking if the item already exists in the cart
            var isItemExists = state.cartItems.some(cartItem => {
                return cartItem.id == action.item.id
            });

            // if the item already exists, simply increase quantity by 1
            if (isItemExists) {
                var item = state.cartItems.find((cartItem) => {
                    return cartItem.id == action.item.id
                })
                var quantity = item.quantity;
                action.item.quantity = quantity + 1;
            }
            else {
                action.item.quantity = 1;
            }
            return {
                cartItems: [
                    ...state.cartItems.filter((cartItem) => {
                        return cartItem.id != action.item.id
                    }), action.item
                ],
                orderTotal:
                    state.cartItems.filter((cartItem) => {
                        return cartItem.id != action.item.id
                    }).reduce((total, cartItem) => {
                        return total + cartItem.priceOne * cartItem.quantity
                    }, 0) + action.item.priceOne * action.item.quantity
            }

            // if the item doesn't exist, add it to the cartItems array
            break;
        case REMOVE_ITEM:
            return {
                cartItems: [...state.cartItems.filter((cartItem) => {
                    return cartItem.id != action.item.id
                }),
                ],
                orderTotal: state.cartItems.filter((cartItem) => {
                    return cartItem.id != action.item.id
                }).reduce((total, cartItem) => { return total + cartItem.priceOne + cartItem.quantity }, 0)
            }
            break;
        case REMOVE_WHOLE_CART:
            // write code to remove whole cart
            console.log("Cart has been emptied.")
            return Object.assign({}, state, {
                cartItems: [],
                orderTotal: 0
            })
            break;
        default:
            return state;
    }
}

// 4. export the store
export const store = createStore(shop);