import { useSelector } from "react-redux";
import "./Paginacion.css"


export const Paginacion = ({ cantidadBtn, cambiarVista }) => {
  let pokemos = useSelector((state) => state.pokemons);
  //Forma por default
  if (cantidadBtn === 0) {
    cantidadBtn = pokemos.length;
  };

  const generatorBtn = (cantidadBtn) => {
    if (cantidadBtn < 10) {
      let result = [];
      for (let i = 0; i < cantidadBtn; i++) {
        result.push(i + 1);
      }
      return result;
    }
  };

  const handlerBtn = (event, e, cambiarVista) => {
    cambiarVista(e - 1);
  };

  const handlerMayorMenor = (value) => {
    if (value === "+") {
      cambiarVista((vistaActual) => {
        if (vistaActual === cantidadBtn - 1) {
          console.log("No hay mas pokemons para mostrar");
          return vistaActual;
        } else {
          return vistaActual + 1;
        }
      });
    }

    if (value === "-") {
      cambiarVista((vistaActual) => {
        if (vistaActual === 0) {
          console.log("Error no se puede bajar mas");
          return vistaActual;
        } else {
          return vistaActual - 1;
        }
      });
    }
  };
  return (
    <div className="paginacion-conteiner">

      <button onClick={(e) => handlerMayorMenor("-")}> {"<"} </button>
      {generatorBtn(cantidadBtn).map((e) => (
        <button
          className={`btn-navigation_${e}`}
          onClick={(event) => handlerBtn(event, e, cambiarVista)}
          key={e}
        >
          {" "}
          {e}{" "}
        </button>
      ))}
      <button onClick={(e) => handlerMayorMenor("+")}> {">"} </button>

    </div>
  );
};
