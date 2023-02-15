import "./Styles/CardInfo.css";

import React from "react";

export const CardInfo = ({ info, close, tipesLogo }) => {
  const {
    id,
    name,
    poke_types,
    hp,
    strength,
    defence,
    height,
    img,
    speed,
    weight,
  } = info;
  return (
    <div className="btn-info">
      {id.length > 11 ? (
        <h3 className="id-detail">Creado</h3>
      ) : (
        <h3 className="id-detail">{`N° ${id}`}</h3>
      )}

      <button onClick={(e) => close((state) => false)} className="close-detail">
        X
      </button>
      <p className="name-detail">{`Nombre :  ${name}`}</p>
      <img src={img} alt={id} className="img-detail" />
      <h3 className="tipos-detail">
        {poke_types.length === 2
          ? (<div><img src={tipesLogo[0]} alt="tipo1" /><img src={tipesLogo[1]} alt="tipo2" />  </div>)
          : <img  className="tipo00" src={tipesLogo} alt="tipo" />}
      </h3>

      <div className="stats-detail">
        <div>
          <p>Vida:</p>
          <input type="range" min="1" max="160" value={hp} />
          <span>{hp}</span>
        </div>
        <div>
          <p>Fuerza:</p>
          <input type="range" min="1" max="160" value={strength} />
          <span>{strength}</span>
        </div>
        <div>
          <p>Defenza:</p>
          <input type="range" min="1" max="170" value={defence} />
          <span>{defence}</span>
        </div>
        <div>
          <p>Peso:</p>
          <input type="range" min="1" max="200" value={weight} />
          <span>{weight}</span>
        </div>
        <div>
          <p>Altura:</p>
          <input type="range" min="1" max="160" value={height} />
         <span>{height}</span> 
        </div>
        <div>
          <p>Velocidad:</p>
          <input type="range" min="1" max="160" value={speed} />
           <span>{speed}</span>
        </div>
      </div>
    </div>
  );
};
