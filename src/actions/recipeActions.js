import * as types from "./actionTypes";

function loadRecipes(recipes) {
  return { type: types.LOAD_RECIPE, recipes };
}

export function loadRecipe() {
  return function(dispatch) {
    return fetch("/recipes")
      .then(response => response.json())
      .then(recipes => {
        dispatch(loadRecipes(recipes));
      })
      .catch(error => {
        throw error;
      });
  };
}

function createRecipes(recipe) {
  return { type: types.CREATE_RECIPE, recipe };
}

export function createRecipe(recipe) {
  return function(dispatch) {
    return fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify((recipe: recipe))
    })
      .then(response => response.json())
      .then(recipe => {
        dispatch(createRecipeSuccess(recipe));
      })
      .catch(error => {
        throw error;
      });
  };
}