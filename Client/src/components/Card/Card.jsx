import style from './Card.module.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';

function Card(props) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         props.removeFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props);
      }
   };

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
      <div className={style.Card}>
         {
            isFav ? (
               <button className={style.fav} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={style.fav} onClick={handleFavorite}>🤍</button>
            )
         }
         <button id='clsBut' onClick={() => props.onClose(props.id)} className={style.cardButton}>
            <span className="material-icons">close</span>
         </button>
         <Link to={`/details/${props.id}`}>
            <img src={props.image} alt='' className={style.cardImg} />
         </Link>
         <h2 className={style.nombre}>{props.name}</h2>
         <article className={style.item}>
            <h2 className={style.propiedad}>Condition</h2><h2 className={style.selfprop}>{props.status}</h2>
         </article>
         <article className={style.item}>
            <h2 className={style.propiedad}>Species</h2><h2 className={style.selfprop}>{props.species}</h2>
         </article>
         <article className={style.item}>
            <h2 className={style.propiedad}>Gender</h2><h2 className={style.selfprop}>{props.gender}</h2>
         </article>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect (
   mapStateToProps,
   mapDispatchToProps
) (Card);


