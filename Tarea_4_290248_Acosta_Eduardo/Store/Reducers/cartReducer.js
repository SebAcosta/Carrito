import { ADD_TO_CART } from "../Actions/cartActions"
import { DELETE_ITEM_FROM_CART } from "../Actions/cartActions";

const initialState ={
    total:0,
    items:[]
}

export default (state = initialState, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            const item = action.item;
            item.id = Math.floor(Math.random() * 1001).toString()
            return{
                total:state.total += action.item.cost,
                items:state.items.concat(action.item)
            }
        /*case DELETE_ITEM_FROM_CART:
            return{
                items: state.items.filter(({id}) => id !== action.item)
            }*/
        default:
            return state
    }
    return state
}