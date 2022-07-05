import productsState from "./state";

function reducer(state = productsState, action) {
  switch (action.type) {
    case "removeProduct":
      return {
        ...state,
        items: state.items.filter(
          (product) => action.payload !== product.id
        ),
      };
    case "ADD_FORM_DATA":
       return{
         ...state,
         items:[...state.items,action.payload.formData]
       }
  }
  return state;
}
export default reducer;
