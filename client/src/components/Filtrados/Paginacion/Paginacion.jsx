import { useSelector } from "react-redux";
import "./Paginacion.css";

export const Paginacion = ({ cantidadBtn, cambiarVista, vista }) => {
  //Estados de redux
  let pokemos = useSelector((state) => state.pokemons);
  //let [btnActivo, setBtnActivo] = useState(1);
  //Forma por default
  if (cantidadBtn === 0) {
    //Si la cantidadBtn es 0 lo dejamos por default en pokemos.length
    cantidadBtn = pokemos.length;
  }

  //Funcion para generar los botones la parte "visual"
  const generatorBtn = (cantidadBtn) => {
    //Funcion extra a hacer
    if (cantidadBtn < 10) {
      let result = [];
      for (let i = 0; i < cantidadBtn; i++) {
        //+1 porque nunca puede ser 0 btn
        result.push(i + 1);
      }
      return result;
    }
  };

  //
  const handlerBtn = (e, cambiarVista, btnHtml) => {
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
    <div className="paginacion-conteiner" id="paginado">
      <button onClick={() => handlerMayorMenor("-")}> {"<"} </button>
      {generatorBtn(cantidadBtn).map((numeroBtn) =>
        vista + 1 === numeroBtn ? (
          <button
            id="activo"
            key={numeroBtn}
            onClick={(e) => handlerBtn(numeroBtn, cambiarVista, e)}
          >
            {numeroBtn}
          </button>
        ) : (
          <button
            onClick={(btnHtml) => handlerBtn(numeroBtn, cambiarVista, btnHtml)}
            key={numeroBtn}
            className={numeroBtn}
          >
            {numeroBtn}
          </button>
        )
      )}
      <button onClick={() => handlerMayorMenor("+")}> {">"} </button>
    </div>
  );
};
