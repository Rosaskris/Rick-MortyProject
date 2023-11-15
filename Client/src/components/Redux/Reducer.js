import {ADD_FAV, FILTER, ORDER, REMOVE_FAV, LOAD_FAVS, GET_USER} from './action-type'

const initialState={
    myFavorites:[],
    allCharacter:[],
    user:{}
}

const rootReducer=(state= initialState, action)=>{
    switch (action.type) {
        case GET_USER:
            return {...state, user: action.payload};
        case LOAD_FAVS:
            return{...state, myFavorites:action.payload}
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacter: action.payload };
        
        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload, allCharacter: action.payload};
        
        case FILTER:
            if(action.payload==='All'){
                return{...state, myFavorites:state.allCharacter}
            } else
            return{...state, myFavorites:state.allCharacter.filter((e)=>e.gender===action.payload)};

        case ORDER:
            // sort((a, b) => (a.title < b.title ? 1 : -1))
            const sortedFavorites = [...state.allCharacter];
            if (action.payload === 'A') {
                sortedFavorites.sort((a, b) => a.id - b.id);
            } else if (action.payload === 'D') {
                sortedFavorites.sort((a, b) => b.id - a.id);
            }
            return {
                ...state,
                myFavorites: sortedFavorites,
            };
    
        default:
            return state
    }
}

export default rootReducer