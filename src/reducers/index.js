import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTALS, GET_AMOUNTS } from "../action"



function reducer(state, action) {

    switch (action.type) {
        case DECREASE:

            let tempCartDec = [];
            // if (action.payload.amount == 1) {
            //     tempCartDec = state.cart.filter(
            //         cartItem => cartItem.id != action.payload.id
            //     )
            // } else {

                tempCartDec = state.cart.map(cartItem => {
                    if (cartItem.id == action.payload.id) {
                        cartItem = { ...cartItem, amount: cartItem.amount - 1 }

                    }
                    return cartItem;
                })
            // }

            return { ...state, cart: tempCartDec }

        case INCREASE:

            let tempCart = state.cart.map(cartItem => {

                if (cartItem.id == action.payload.id) {
                    return { ...cartItem, amount: cartItem.amount + 1 }
                }

                return cartItem
            });

            return { ...state, cart: tempCart }

        case CLEAR_CART:
            return { ...state, cart: [] }

        case REMOVE:

            return { ...state, cart: state.cart.filter(cartItem => cartItem.id != action.payload.id) }

        case GET_TOTALS:

            let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {

                const { price, amount } = cartItem;
               const itemTotal=price*amount;

                cartTotal.amount += amount;
                cartTotal.total += itemTotal;

                return cartTotal;

            }, {
                total: 0,
                amount: 0
            })

            total =parseFloat(total.toFixed(2));

            return { ...state, amount, total }

        default:
            return state;

    }

}


export default reducer