//Componenetes propios
import { Paginacion } from "../Filtrados/Paginacion/Paginacion";
import { Nav } from "../Filtrados/Nav/Nav";
import { CardPokemon } from "./CardPokemon";
import { Loading } from "./Loading";
import "./Styles/GetPokemons.css";
//Modulos
import { useDispatch, useSelector } from "react-redux";
import { resetSearch } from "../../redux/actions";
import { useState } from "react";

export const GetPokemons = () => {
  let data = useSelector((state) => state.pokemons);
  let pokeTipes =  useSelector((state) => state.pokeTipes);
  let busqueda = useSelector((state) => state.searchName);
  const dispatch = useDispatch();
  const [info, setInfo] = useState([]);

  const [vista, setVista] = useState(0);
  const [cantidadBotones, setCantidadBotones] = useState(0);
console.log(busqueda)
  //Reset
  function handlerClick(e) {
    setInfo((e) => []);
    dispatch(resetSearch());
    setCantidadBotones(data.length);
  }
  return (
    <div>
      {data.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <Nav
            setInfo={setInfo}
            setCantidadBotones={setCantidadBotones}
            setVista={setVista}
            reset={handlerClick}
          />
          <Paginacion cantidadBtn={cantidadBotones} cambiarVista={setVista} />
          <div className="getpokemos-conteiner">
            {busqueda.length === 0 || Array.isArray(busqueda[0]) ? (
              info.length === 0 ? (
                data[vista].map((e) => <CardPokemon info={e} key={e.id} pokeTipes={pokeTipes}/>)
              ) : (
                info[vista].map((e) => <CardPokemon info={e} key={e.id} pokeTipes={pokeTipes}/>)
              )
            ) : (
              <CardPokemon
                info={busqueda[0]}
                key={`busqueda-${busqueda[0].name}`}
                pokeTipes={pokeTipes}
              />
            )}
          </div>

          <Paginacion cantidadBtn={cantidadBotones} cambiarVista={setVista} />
        </div>
      )}
    </div>
  );
};
