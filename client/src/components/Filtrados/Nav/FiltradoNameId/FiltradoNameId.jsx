import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemonForName } from "../../../../redux/actions";
import "./FiltradoNameId.css"
export const FiltradoNameId = ({ setInfo, setCantidadBotones, setVista }) => {

  const [name, setName] = useState("");

  const dispatch = useDispatch();

  function handlerChange(e) {
    let inputValue = e.target.value;
    setName((e) => (e = inputValue));
  }

  function handlerClick(e) {
    setVista(state => 0)
    if (name.length === 0) return alert("Ingresa un name o un id!!");
    dispatch(searchPokemonForName(name));
    setInfo( e => [])
    setCantidadBotones(state =>1);
  }

  return (
    <div className="conteiner-searchbar">
      <input
        type="text"
        placeholder="Ingresar un name o id"
        name="name"
        onChange={(e) => handlerChange(e)}
      />
      <button onClick={(e) => handlerClick(e)}>Buscar</button>
    </div>
  );
};
