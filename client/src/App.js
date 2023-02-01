import "./App.css";
import {GetPokemons} from "./components/GetPokemons";
import axios from "axios";
import { useState , useEffect } from "react";

function App() {
  let [pokemons, setPokemons] = useState([]);

  async function getData() {
    let res = await axios.get("http://localhost:3001/pokemons");
    const { data } = res;
    setPokemons((e) => data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
      <GetPokemons data = {pokemons}/>
    </div>
  );
}

export default App;
