import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const SEARCH_POKEMON_NAME = "SEARCH_POKEMON_NAME";
export const GET_DETAIL_POKEMON = "GET_DETAIL_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const RESET_SEARCH = "RESET_SEARCH";
//Cambiando esto podemo cambiar la cantidad de pokemones que se ven por pagina
export const cantidadDePokePorPage = 12;
//Esta funcion divi los datos recividos para poder postrarlos de a 12 pokemons por page.
export const handlerPokemos = (viewPokemons, datos) => {
  let cantidadBtn = Math.ceil(datos.length / viewPokemons);

  let result = [];
  let pibote = 0;

  let sume = viewPokemons;

  for (let i = 0; i < cantidadBtn; i++) {
    result.push(datos.slice(pibote, viewPokemons));
    pibote = viewPokemons;
    viewPokemons = viewPokemons + sume;
  }
  return result;
};

export const getAllPokemons = () => async (dispatch) => {
  return await axios("http://localhost:3001/pokemons").then((e) => {
    const { data } = e;

    let result = handlerPokemos(cantidadDePokePorPage, data);
    return dispatch({
      type: GET_ALL_POKEMONS,
      payload: result,
    });
  });
};

export const searchPokemonForName = (name) => async (dispatch) => {
  //Si es un numero buscamos por id
  if (Number(name)) {
    return await axios(`http://localhost:3001/pokemons/${name}`).then((e) => {
      const { data } = e;
      //console.log(data)
      if(Array.isArray(data)) alert(`No se encontro el pokemon con el ID: ${name}`)
      return dispatch({
        type: SEARCH_POKEMON_NAME,
        payload: data,
      });
    }).catch( error => {
      alert(`No se encontro el pokemon con el ID: ${name}`);
      return dispatch({
        type: SEARCH_POKEMON_NAME,
        payload: [],
      });
    })
  }
//De lo contrario buscamos por name
  return await axios(`http://localhost:3001/pokemons?name=${name}`).then(
    (e) => {
      const { data } = e;
      
      if(Array.isArray(data)) alert(`No se encontro el pokemon con el nombre: ${name}`);

      return dispatch({
        type: SEARCH_POKEMON_NAME,
        payload: data,
      });
    }
  )
};


export const resetSearch = () => (dispatch) => {
  return dispatch({
    type: RESET_SEARCH,
  });
};

export const getDetailPokemon = (id) => async (dispatch) => {
  return await axios(`http://localhost:3001/pokemons/${id}`).then((e) => {
    const { data } = e;
    return dispatch({
      type: GET_DETAIL_POKEMON,
      payload: data,
    });
  });
};

export const createPokemon = (data) => async (dispatch) => {
  return await axios.post("http://localhost:3001/pokemons", data).then((e) => {
    return dispatch({
      type: CREATE_POKEMON,
      payload: e.data,
    });
  });
};

export const getTypes = () => async (dispatch) => {
  return await axios("http://localhost:3001/types").then((e) => {
    const { data } = e;
    return dispatch({
      type: GET_ALL_TYPES,
      payload: data,
    });
  });
};
