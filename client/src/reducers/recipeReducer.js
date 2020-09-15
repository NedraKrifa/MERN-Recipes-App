import * as actionTypes from "../actions/actionTypes";

const initialState = {
  items: [],
  item: {},
  loading: false,
};

const editRecipe = (recipes, recipe, id) => {
  const newRecipes = recipes.map((item) => {
    return item._id === id ? recipe : item;
  });
  return newRecipes;
};
export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_RECIPES:
      return { ...state, items: action.payload, loading: false };
    case actionTypes.ADD_NEW_RECIPE:
      return { ...state, items: [action.recipe, ...state.items] };
    case actionTypes.EDIT_RECIPE:
      return {
        ...state,
        items: editRecipe(state.items, action.recipe, action.id),
      };
    case actionTypes.REMOVE_RECIPE:
      return {
        ...state,
        items: [...state.items.filter((recipe) => recipe._id !== action.id)],
      };
    case actionTypes.GET_RECIPE:
      return {
        ...state,
        item: action.payload,
      };
    case actionTypes.RECIPES_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
