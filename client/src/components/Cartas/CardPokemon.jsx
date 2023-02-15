import React, { useState } from "react";
import "./Styles/CardPokemon.css";
import { CardInfo } from "./CardInfo";
export const CardPokemon = ({ info, pokeTipes }) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const { name, poke_types, img } = info;

  function tipesLogo(cantidad){
    if(cantidad === 1){
      for(let i of pokeTipes){
        if(i.name === poke_types[0]){
          return i.typeImg
        }
      }
    };

let result = [];
    if(cantidad === 2){
      for(let i of pokeTipes){
        if(i.name === poke_types[0] || i.name === poke_types[1]){
result.push(i.typeImg)
        }
      }
    }

    return result
  }
  

  return (
    <div className="Card-conteiner">
      {
        poke_types.length > 1 ?(<div className="twoTypes-img">
          <img src={tipesLogo(poke_types.length)[0]} alt="logoPokemon" />
          <img src={tipesLogo(poke_types.length)[1]} alt="logoPokemon" />
        </div>) :<img  className="oneTypes-img" src={tipesLogo(poke_types.length)} alt="logoPokemon" />
      }
     
      <h1 className="Card-h1">{name.toUpperCase()}</h1>
      <img src={img} alt={name} className="Card-img" />
      

      <button
      className="btn-masInfo"
        onClick={(e) => setMoreInfo((state) => true)}
      >{`Mas sobre: ${name}`}</button>
      {moreInfo ? <CardInfo info={info} close={setMoreInfo} tipesLogo={tipesLogo(poke_types.length)}/> : ""}
    </div>
  );
};
