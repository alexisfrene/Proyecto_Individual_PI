import { FintradoTipo } from "./FiltradoTipos/FintradoTipo";
import { FiltradoABC } from "./FiltradoABC/FiltradoABC";
import { FiltradoPower } from "./FiltradoPower/FiltradoPower";
import "./Nav.css";
import { FiltradoNameId } from "./FiltradoNameId/FiltradoNameId";
import { Link } from "react-router-dom";
import titlePokemon from "../../imgComponenets/titlePokemon.png";
import picachuInicio from "../../imgComponenets/picachu.png";
import pokeInicio from "../../imgComponenets/pokeIncio.png";
export const Nav = ({ setInfo, setCantidadBotones, setVista, reset , info}) => {
  return (
    <div className="contenedor-navigator">
      <div className="conetiner-up">
        <img className="pokeInicio" src={pokeInicio} alt="pokeinicio" />
        <img className="titlePokemon" src={titlePokemon} alt="title-pokemon" />
        <img
          className="picachuInicio"
          src={picachuInicio}
          alt="pikachu-inicio"
        />

        <button className="btn-inicio-nav" onClick={(e) => reset(e)}>
          Inicio
        </button>
        <FiltradoNameId
          setInfo={setInfo}
          setCantidadBotones={setCantidadBotones}
          setVista={setVista}
        />
        <button className="btn-create-nav">
          <Link to="/create">Create</Link>
        </button>
      </div>

      <div className="conteiner-dow">
        <FintradoTipo
          setInfo={setInfo}
          setCantidadBotones={setCantidadBotones}
          setVista={setVista}
          info={info}
        />
        <FiltradoABC
          setInfo={setInfo}
          setCantidadBotones={setCantidadBotones}
          setVista={setVista}
          info={info}
        />
        <FiltradoPower
          setInfo={setInfo}
          setCantidadBotones={setCantidadBotones}
          setVista={setVista}
          info={info}
        />
      </div>
    </div>
  );
};
