import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPokemon, getAllPokemons } from "../../redux/actions";
import axios from "axios";
import "./CreatePokemon.css";
import img from "../imgComponenets/titlePokemon.png";
import imgCrear from "../imgComponenets/creatPokemonImg.png";
import createFondo from "../imgComponenets/create-fondo.mp4";
const defaultImg =
  "https://cdn.pixabay.com/photo/2016/08/15/00/50/pokeball-1594373_960_720.png";

export const CreatePokemon = () => {
  const pokeTipes = useSelector((state) => state.pokeTipes);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tipeOnClose, setTipeOnClose] = useState(false);
  const [pokeData, setPokeData] = useState({
    name: "",
    weight: 1,
    poke_types: [],
    height: 1,
    hp: 1,
    strength: 1,
    defence: 1,
    speed: 1,
    img: defaultImg,
  });

  function handlerCheckBox(e) {
    let checkName = e.target.name;
    let checkOnOff = e.target.checked;
    let { poke_types } = pokeData;

    // //Aca es cuando queremos desmarcar una opcion
    if (poke_types.length === 0) {
      return setPokeData({ ...pokeData, poke_types: [checkName] });
    }

    if (poke_types.length === 1 && poke_types[0] === undefined) {
      return setPokeData({ ...pokeData, poke_types: [checkName] });
    }
    if (!checkOnOff) {
      if (poke_types[0] === checkName) {
        return setPokeData({ ...pokeData, poke_types: [poke_types[1]] });
      }

      if (poke_types[1] === checkName) {
        return setPokeData({ ...pokeData, poke_types: [poke_types[0]] });
      }
    } else {
      //Aca seria cuando estamos marcando
      if (poke_types.length >= 2) {
        e.target.checked = false;
        return alert(`Maximo 2 tipos no se puedo agregar ${checkName}`);
      } else {
        return setPokeData({
          ...pokeData,
          poke_types: [...poke_types, checkName],
        });
      }
    }
  }

  function handlerChange(e) {
    let dataName = e.target.name;
    let dataValue = e.target.value;
    setPokeData({
      ...pokeData,
      [dataName]: dataValue,
    });
  }

  async function handlerSubmit(e) {
    e.preventDefault();
    //Dato obligatorio name
     if (pokeData.name === "")
        return alert("Falta proporcionar un nombre al pokemon");
    let result = await axios(
      `http://localhost:3001/pokemons/?name=${pokeData.name}`
    );
    if (result.data.length === 0) {
      //Max 10 caracteres
      if (pokeData.name.length > 10)
        return alert("Max 10 caracteres en nombre");
      //Vemos que no contenga numeros
      for (let i of pokeData.name) {
        const pibote = Number.isInteger(Number(i));
        if (pibote) return alert(`El nombre no debe contener numeros`);
      }
      //Si no nos pasan una img ponemos una por defecto
      if (pokeData.img.length === 0)
        setPokeData({ ...pokeData, img: defaultImg });
      //Si el usuario no nos proporciona un tipo lo ponemos por defecto en desconocido
      if (pokeData.poke_types.length === 0)
        setPokeData({ ...pokeData, poke_types: ["unknown"] });
      //Aca simplemente no aseguramos que estos dataos de estadistica sean del type Number
      const { weight, height, hp, strength, defence, speed } = pokeData;
      let newPokemon = {
        weight: Number(weight),
        height: Number(height),
        hp: Number(hp),
        strength: Number(strength),
        defence: Number(defence),
        speed: Number(speed),
        name: pokeData.name.toLowerCase(),
        img: pokeData.img,
        poke_types: pokeData.poke_types,
      };
      dispatch(createPokemon(newPokemon));

      //Luego de despachar el pokemon vaciamos el estado
      setPokeData({
        name: "",
        weight: 1,
        poke_types: [],
        height: 1,
        hp: 1,
        strength: 1,
        defence: 1,
        speed: 1,
        img: "",
      });
      //Volvemos a pedir todos lo pokemons para que ahora se muestre el creado
      dispatch(getAllPokemons());
      //Avisamos al usuario que ya se creo su pokemon
      alert(`Pokemon creado con exito : ${newPokemon.name}`);
      //Redireccionamos al usuamos a /home
      return navigate("/home");
    } else {
      return alert(`El nombre : ${pokeData.name} , ya se encuentra en uso`);
    }
  }

  return (
    <center className="conteiner-create">
      <video src={createFondo} autoPlay={true} muted={true} loop={true} />
      <form className="form-conteiner" onSubmit={(e) => handlerSubmit(e)}>
        <div className="title-create">
          {" "}
          <img className="imgPokemon" src={img} alt="PokeTitle-create" />{" "}
          <img
            src={imgCrear}
            alt="imgCreatPokemon"
            className="imgCreatePokemon"
          />{" "}
        </div>

        <span>
          <p className="parrafo-name">Nombre *:</p>
          <input
            className="create-input-name"
            type="text"
            placeholder="Nombre"
            name="name"
            autoFocus
            onChange={(e) => handlerChange(e)}
          />
          <p></p>
        </span>
        <span>
          <p>Vida:</p>
          <input
            name="hp"
            type="range"
            min="1"
            max="200"
            defaultValue="1"
            onChange={(e) => handlerChange(e)}
          />
          <p>{pokeData.hp}</p>
        </span>
        <span>
          <p>Fuerza:</p>
          <input
            name="strength"
            type="range"
            min="1"
            max="200"
            defaultValue="1"
            onChange={(e) => handlerChange(e)}
          />
          <p>{pokeData.strength}</p>
        </span>
        <span>
          <p>Defensa:</p>
          <input
            name="defence"
            type="range"
            min="1"
            max="200"
            defaultValue="1"
            onChange={(e) => handlerChange(e)}
          />
          <p>{pokeData.defence}</p>
        </span>
        <span>
          <p>Velocidad:</p>
          <input
            name="speed"
            type="range"
            min="1"
            max="200"
            defaultValue="1"
            onChange={(e) => handlerChange(e)}
          />
          <p>{pokeData.speed}</p>
        </span>
        <span>
          <p>Altura:</p>
          <input
            name="height"
            type="range"
            min="1"
            max="200"
            defaultValue="1"
            onChange={(e) => handlerChange(e)}
          />
          <p>{pokeData.height}</p>
        </span>
        <span>
          <p>Peso:</p>
          <input
            name="weight"
            type="range"
            min="1"
            max="200"
            defaultValue="1"
            onChange={(e) => handlerChange(e)}
          />
          <p>{pokeData.weight}</p>
        </span>
        <span>
          <p className="parrafo-img"> Imagen:</p>
          <input
            className="create-input-img"
            type="url"
            placeholder="Imagen"
            name="img"
            onChange={(e) => handlerChange(e)}
          />
          <p></p>
        </span>
        <span>
          {tipeOnClose ? (
            <div className="fixed-tipo">
              <button
                className="btn-close-tipo"
                onClick={(e) => setTipeOnClose((e) => false)}
              >
                X
              </button>

              <h2>Selecciona los tipos de tu pokemon</h2>
              {pokeTipes.length === 0
                ? "Cargando..."
                : pokeTipes.map((e) => (
                    <label key={e.id} className="label-imgCreate">
                      {
                        <img
                          className={`imgCreateType-${e.name}`}
                          src={e.typeImg}
                          alt="tiposPoke"
                        />
                      }
                      <input
                        type="checkbox"
                        onClick={(e) => handlerCheckBox(e)}
                        name={e.name}
                        className="input-checkbox"
                      />
                    </label>
                  ))}
            </div>
          ) : (
            ""
          )}

          {pokeData.poke_types[0] === undefined ? (
            <div
              className="mostrar-tipos"
              onClick={(e) => setTipeOnClose((e) => true)}
            >
              ELEJIR TIPO
            </div>
          ) : (
            <button type="submit" className="btn-crear-pokemon">
              Crear
            </button>
          )}
        </span>
      </form>
    </center>
  );
};
