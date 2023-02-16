import "./FiltradoPower.css";
import { useDispatch, useSelector } from "react-redux";
import { handlerPokemos , cantidadDePokePorPage , resetSearch} from "../../../../redux/actions";
export const FiltradoPower = ({setInfo , setCantidadBotones, setVista , info}) => {
  let pokemons = useSelector((state) => state.pokemons);
  let busqueda = useSelector((state) => state.searchName);
const dispatch = useDispatch()

  function handlerClick(setInfo, order) {

    if(busqueda.length > 0) {
      dispatch(resetSearch());
    }
    if(info.length === 0){
      setVista((e) => 0);
      let result = [];
      let dataFiltrada;
      //Dejar el array liso
      for (let i = 0; i < pokemons.length; i++) {
        result = [...result, ...pokemons[i]];
      };
  
  
  
      if (order === "+") {
        dataFiltrada = result.sort((a, b) => {
          if (a.strength > b.strength) {
            return 1;
          }
          if (a.strength < b.strength) {
            return -1;
          }
          return 0;
        });
      } else {
        dataFiltrada = result.sort((a, b) => {
          if (a.strength < b.strength) {
            return 1;
          }
          if (a.strength > b.strength) {
            return -1;
          }
          return 0;
        });
      }
      
      let arrArmado = handlerPokemos(cantidadDePokePorPage, dataFiltrada);
      setInfo((e) => arrArmado);
      setCantidadBotones((e) => arrArmado.length);
    }else{
      setVista((e) => 0);
      let result = [];
      let dataFiltrada;
      //Dejar el array liso
      for (let i = 0; i < info.length; i++) {
        result = [...result, ...info[i]];
      };
  
  
  
      if (order === "+") {
        dataFiltrada = result.sort((a, b) => {
          if (a.strength > b.strength) {
            return 1;
          }
          if (a.strength < b.strength) {
            return -1;
          }
          return 0;
        });
      } else {
        dataFiltrada = result.sort((a, b) => {
          if (a.strength < b.strength) {
            return 1;
          }
          if (a.strength > b.strength) {
            return -1;
          }
          return 0;
        });
      }
      
      let arrArmado = handlerPokemos(cantidadDePokePorPage, dataFiltrada);
      setInfo((e) => arrArmado);
      setCantidadBotones((e) => arrArmado.length);
    }
  }

  return (
    <div>
      <button className="btn-power" onClick={(e) => handlerClick(setInfo, "+")}>Poder -</button>

      <button className="btn-power" onClick={(e) => handlerClick(setInfo, "-")}>Poder +</button>
    </div>
  );
};
