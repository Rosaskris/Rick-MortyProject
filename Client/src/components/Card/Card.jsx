import data from "../../data";
import styles from '../Card/Card.module.css'
import {Link} from 'react-router-dom';
import {setStatus} from 'react';
import { addFav, removeFav } from '../Redux/action-type';
import {connect, useDispatch, useSelector} from 'react-redux'
import { useState , useEffect} from "react";



export default function Card(props) {
   const{id,status,image,name,species,gender,origin}= props;

   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites);

   const [isFav, setIsFav]= useState(false)

   const handleFavorite = () => {
      if (isFav) {
         dispatch(removeFav(id));
         setIsFav(false);
      } else {
         const data = {
            id,
            image,
            name,
            species,
            origin,
            status,
            gender
         }
         dispatch(addFav(data));
         setIsFav(true);
      }
      };

      useEffect(() => {
         myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
               setIsFav(true);
            }
         });
      }, [myFavorites]);

   return (
         <div id='card' className={styles.card}>
            <button id= 'botonDelete' className= {styles.button} onClick={()=>{props.onClose(props.id)}}>X</button>
            {isFav ? (
            <button onClick={handleFavorite} className={styles.buttonFav}>❤️</button>
            ) : (
            <button onClick={handleFavorite} className={styles.buttonFav} >🤍</button>)
            }
               <img className= {styles.images} src={props.image} alt={props.name} /> 
               
               <Link to={`/detail/${props.id}`} style={{textDecoration:'none'}}>
               <div className={styles.charName}><h2>{props.name}</h2></div>
               </Link>
            

            <div>
            </div>
         
         </div>
   );
}

