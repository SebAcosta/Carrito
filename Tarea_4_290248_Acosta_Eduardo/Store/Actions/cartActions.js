export const ADD_TO_CART = "ADD_TO_CART"
export const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART"

export const addToCart = (item) =>{
    return{
        type:ADD_TO_CART,
        item:item
    }
}

export const deleteItemFromCart = item =>({
        type: DELETE_ITEM_FROM_CART,
        item: item
});