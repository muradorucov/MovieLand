const initialValue = [];

export function cartListReducer(state = initialValue, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];

    default:
      return state;
  }
}
