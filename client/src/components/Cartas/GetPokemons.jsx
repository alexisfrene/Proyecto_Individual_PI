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

//Componente principal.
export const GetPokemons = () => {
  const dispatch = useDispatch();
  //Estados de redux
  const pokeTipes = useSelector((state) => state.pokeTipes);
  const busqueda = useSelector((state) => state.searchName);
  const data = useSelector((state) => state.pokemons);
  //Estados locales
  const [cantidadBotones, setCantidadBotones] = useState(0);
  const [vista, setVista] = useState(0);
  const [info, setInfo] = useState([]);
  //Handler
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
            info={info}
          />
          <Paginacion cantidadBtn={cantidadBotones} cambiarVista={setVista} vista={vista} />
          <div className="getpokemos-conteiner">
            {busqueda.length === 0 || Array.isArray(busqueda[0]) ? (
              info.length === 0 ? (
                data[vista].map((e) => (
                  <CardPokemon info={e} key={e.id} pokeTipes={pokeTipes} />
                ))
              ) : (
                info[vista].map((e) => (
                  <CardPokemon info={e} key={e.id} pokeTipes={pokeTipes} />
                ))
              )
            ) : (
              <CardPokemon
                info={busqueda[0]}
                key={`busqueda-${busqueda[0].name}`}
                pokeTipes={pokeTipes}
              />
            )}
          </div>

          <Paginacion cantidadBtn={cantidadBotones} cambiarVista={setVista} vista={vista}/>
        </div>
      )}
    </div>
  );
};
