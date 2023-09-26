import { createSlice } from '@reduxjs/toolkit';

const cartItems=[
    {
    id: 1,
    name: 'Apple',
    price: 100,
    quantity: 1
   },

   {
    id: 2,
    name: 'orange',
    price: 100,
    quantity: 2
   },
   {
    id: 3,
    name: 'Mango',
    price: 100,
    quantity: 3
   },
   {
    id: 4,
    name: 'Jackfruit',
    price: 100,
    quantity: 4
   }

]

const initialState ={
    amount: 3,
    total:0,
    isLoading:true,
    cartItems
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart: (state=>{state.cartItems=[]}),
        removeItem:((state, actions)=>{
            const itemId =actions.payload;
            state.cartItems=state.cartItems.filter(item=>item.id!==itemId);
        }),
        increaseItem:((state,actions)=>{
            const itemId =actions.payload;
            const cartItem = state.cartItems.find(item =>item.id===itemId);
            cartItem.quantity =cartItem.quantity+1;
        }),
        decreaseItem:((state,actions)=>{
            const itemId =actions.payload;
            const cartItem = state.cartItems.find(item =>item.id===itemId);
            cartItem.quantity =cartItem.quantity-1;
        }),

        calculateTotals:((state)=>{
            let amount=0;
            let total=0;
            state.cartItems.forEach(item=>{
                amount +=item.quantity;
                total+=item.price*item.quantity;
            });
            state.amount =amount;
            state.total =total;
        })

    }
});

export const { clearCart,removeItem,increaseItem,decreaseItem, calculateTotals} = cartSlice.actions;
export default cartSlice.reducer;