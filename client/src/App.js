//Componentes propios
import { StartPage } from "./components/layout/StartPage";
import { GetPokemons } from "./components/Cartas/GetPokemons";
import { CreatePokemon } from "./components/CreatePokemon/CreatePokemon";
//Estilos
import "./App.css";
//Modulos
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons , getTypes} from "./redux/actions/index";

function App() {
  //Esto es para ir cargando los pokemons desde que entramos a la aplicacion
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getTypes());
  }, []);
  return (
    <div className="app-conteiner">
      <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/home" element={<GetPokemons />}></Route>
      <Route path="/create" element={<CreatePokemon />} />
    </Routes>
    </div>
    
  );
}

export default App;
