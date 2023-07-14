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
       
      <h1>{character.name}</h1>
   
      <div className={style.container}>
         <div className={style.imageContainer} >
            <img src={character.image} alt={character.name} />
         </div>

         <div className={style.infoContainer}>
            <article>
            <h2 className={style.propiedad}>ID</h2><h2 className={style.selfprop}>{id}</h2>
            </article>

            <article>
               <h2 className={style.propiedad}>Status</h2><h2 className={style.selfprop}>{character.status}</h2>
            </article>

            <article>
               <h2 className={style.propiedad}>Species</h2><h2 className={style.selfprop}>{character.species}</h2>
            </article>

            <article>
               <h2 className={style.propiedad}>Gender</h2><h2 className={style.selfprop}>{character.gender}</h2>
            </article>
            
            <article>
               <h2 className={style.propiedad}>Origin</h2><h2 className={style.selfprop}>{character.origin}</h2>
            </article>
         </div>
      </div>


   </div>
);
}
