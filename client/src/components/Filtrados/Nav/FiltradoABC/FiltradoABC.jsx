import { useDispatch, useSelector } from "react-redux";
import { handlerPokemos , cantidadDePokePorPage } from "../../../../redux/actions";
import "./FiltradoABC.css";
import { resetSearch } from "../../../../redux/actions";

export const FiltradoABC = ({setInfo , setCantidadBotones, setVista}) => {
  let pokemons = useSelector((state) => state.pokemons);
  let busqueda = useSelector((state) => state.searchName);
  const dispatch = useDispatch();

  function handlerClick(e, order) {
if(busqueda.length > 0) {
  dispatch(resetSearch());
}
    setVista((e) => 0);
    let result = [];
    let dataFiltrada;
    for (let i = 0; i < pokemons.length; i++) {
      result = [...result, ...pokemons[i]];
    }

    if (order === "+") {
      dataFiltrada = result.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
    } else {
      dataFiltrada = result.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
    }
    let arrArmado = handlerPokemos(cantidadDePokePorPage, dataFiltrada);
    setInfo((e) => arrArmado);
    setCantidadBotones((e) => arrArmado.length);
    
  }

  return (
    <div>
      <button className="btn-ABC" onClick={(e) => handlerClick(e, "+")}> A-Z</button>
      <button className="btn-ABC" onClick={(e) => handlerClick(e, "-")}> Z-A</button>
    </div>
  );
};
