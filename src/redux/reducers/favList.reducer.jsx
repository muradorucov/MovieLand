const initialValue = [];

export function favListReducer(state = initialValue, action) {
  switch (action.type) {
    case "ADD_TO_FAV":
      return [...state, action.payload];

    case "REMOVE_FROM_FAV":
      return state.filter((movie) => movie.id !== action.payload);

    case "EMPTY_FAV_LIST":
      break;
    default:
      return state;
  }
}
