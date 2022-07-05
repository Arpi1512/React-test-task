import favoriteState from "./state";

function Reducer(state = favoriteState, action) {
  switch (action.type) {
    case "addFavorite":
      if (!state.items.includes(action.product)) {
        return { ...state, items: [...state.items, action.product] };
      }
      break;
    case "removefavorite":
      return {
        ...state,
        items: state.items.filter(
          (product) => action.payload.id !== product.id
        ),
      };
      break;
  }
  return state;
}
export default Reducer;
