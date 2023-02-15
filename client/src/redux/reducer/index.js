import {
  GET_ALL_POKEMONS,
  SEARCH_POKEMON_NAME,
  GET_DETAIL_POKEMON,
  CREATE_POKEMON,
  GET_ALL_TYPES,
  RESET_SEARCH
} from "../actions/index";

const initialState = {
  pokemons: [],
  searchName: [],
  detailPokemo: [],
  info: [],
  pokeTipes:[],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case SEARCH_POKEMON_NAME:
      return {
        ...state,
        searchName: [action.payload],
      };
    case GET_DETAIL_POKEMON:
      return {
        ...state,
        detailPokemo: action.payload,
      };
    case CREATE_POKEMON:
      return {
        ...state,
        info: action.payload,
      };
      case GET_ALL_TYPES:
        return {
          ...state,
          pokeTipes: action.payload,
        };
        case RESET_SEARCH :
          return {
            ...state,
            searchName:[]
          }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
