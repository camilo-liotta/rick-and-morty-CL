import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"

const initialState = {
    myFavorites : []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...action.payload]
            };
        case REMOVE_FAV:
            // console.log(state.myFavorites);
            const filteredFavs = state.myFavorites.filter((favorite) => favorite.id !== action.payload.id)
            console.log(filteredFavs);
            
            return {
                myFavorites: [...action.payload]
            };
        case FILTER:
            const allCharactersFiltered = state.myFavorites.filter(character => character.gender === action.payload)
            return {
                ...state,
                myFavorites: 
                    action.payload === 'allCharacters'
                    ? [...state.myFavorites]
                    : allCharactersFiltered
            }
        case ORDER:
            const allCharactersFavCopy = [...state.myFavorites]
            return {
                ...state,
                myFavorites:
                    action.payload === 'A'
                    ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                    : allCharactersFavCopy.sort((a, b) => b.id - a.id)
            }
        default:
            return{...state};
    }
}

export default reducer;