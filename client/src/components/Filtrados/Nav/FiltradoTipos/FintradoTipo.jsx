import "./FiltradoTipo.css";
import { useDispatch, useSelector } from "react-redux";
import {
  cantidadDePokePorPage,
  handlerPokemos,
  resetSearch,
} from "../../../../redux/actions/index";
import { useState } from "react";

export const FintradoTipo = ({ setInfo, setCantidadBotones, setVista , info}) => {
  const [vistaTipos, setVistaTipos] = useState(false);
  //Me traigo de redux los datos necesarion pokemons y typos
  let pokeType = useSelector((state) => state.pokeTipes);
  let pokemons = useSelector((state) => state.pokemons);
  let busqueda = useSelector((state) => state.searchName);
  const dispatch = useDispatch();

  function handlerClick(e) {
    if (busqueda.length > 0) {
      dispatch(resetSearch());
    }

    //if(info.length === 0){
      setVista((e) => 0);
    //Nombre del tipo de poquemon a filtrar
    let typePokemons = e.target.name;

    //Este for es para dejar un array "liso" [[] , [] , []] ==> [{} , {}...]
    let result = [];
    for (let i = 0; i < pokemons.length; i++) {
      result = [...result, ...pokemons[i]];
    }
    //Aca comparamos si incluye el tipo pedido por el usuario
    let dataFiltrada = result.filter((e) =>
      e.poke_types.includes(typePokemons)
    );

    if (dataFiltrada.length === 0) {
      return alert(`No hay pokemons de tipo : ${typePokemons}`);
    }

    let arrArmado = handlerPokemos(cantidadDePokePorPage, dataFiltrada);
    setVistaTipos(state => false)
    setInfo((e) => arrArmado);
    setCantidadBotones((e) => arrArmado.length);
     //}
    //else{
    //   setVista((e) => 0);
    //   //Nombre del tipo de poquemon a filtrar
    //   let typePokemons = e.target.name;
  
    //   //Este for es para dejar un array "liso" [[] , [] , []] ==> [{} , {}...]
    //   let result = [];
    //   for (let i = 0; i < info.length; i++) {
    //     result = [...result, ...info[i]];
    //   }
    //   //Aca comparamos si incluye el tipo pedido por el usuario
    //   let dataFiltrada = result.filter((e) =>
    //     e.poke_types.includes(typePokemons)
    //   );
  
    //   if (dataFiltrada.length === 0) {
    //     return alert(`No hay pokemons de tipo : ${typePokemons}`);
    //   }
  
    //   let arrArmado = handlerPokemos(cantidadDePokePorPage, dataFiltrada);
    //   setVistaTipos(state => false)
    //   setInfo((e) => arrArmado);
    //   setCantidadBotones((e) => arrArmado.length);
    // }

    
  }

  return (
    <div>
      <button className="btn-tipos-off" onClick={(e) => setVistaTipos((state) => true)}>Tipos</button>
      {vistaTipos ? (
        <div className="div-fixed-tipos">
          <button
            className="btn-close-tipos"
            onClick={(e) => setVistaTipos((state) => false)}
          >
            X
          </button>
          <h3>Filtrar por tipos : </h3>
          {
            pokeType.map((e) => (
              <button className="btn-tipo" name={e.name} key={e.id} onClick={(e) => handlerClick(e)}>
                {e.name}
              </button>
              ))
          }
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
