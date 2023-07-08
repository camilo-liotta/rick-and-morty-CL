import style from './Details.module.css';
import React, { useState, useEffect } from 'react'
import Error from '../Error/Error';
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function Details() {
   
   var {id} = useParams();

   var isValidID = true;

   if ( id > 826 || id < 1 ){ isValidID = false; }
   
   const [character, setCharacter] = useState({});

   useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);
   
   if ( !isValidID ) {
      return (
         <div>
            <Error/>
         </div>
      );
   }

   
  return (
    <div className={style.Details}>
        <h1>Details</h1>
        <img src={character.image} alt={character.name} />
        <h2>ID: {id}</h2>
        <h2>{character.name}</h2>
        <h2>{character.status}</h2>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.origin?.name}</h2>
    </div>
  );
}
