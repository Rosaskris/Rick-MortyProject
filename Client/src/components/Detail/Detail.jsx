import axios from "axios"
import { useState } from "react";
import {useParams, Link} from 'react-router-dom';
import { useEffect } from "react";
import styles from '../Detail/Detail.module.css'


export default function Detail(props){

    const {id}= useParams();
    const [character, setCharacter]= useState({});

useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
        if (data.name) {
            setCharacter(data);
            } else {
            window.alert('No hay personajes con ese ID');
            }
        });
    //     return setCharacter({});
    // }, [id]);

    // (async () => {
    //     try {
    //         const data = await axios(
    //         `https://rickandmortyapi.com/api/character/${id}`
    //         );
    //         if (data) {
    //             setCharacter(data);
    //         } else {
    //             window.alert("No hay personajes con ese ID");
    //         }
    //     } catch (error) {
    //         window.alert(error.message);
    //     }
    // })();
    return setCharacter({});
    }, [id]);

    return(
    <div className={styles.cardsContainer}> 

        {character.name && (
        < div className={styles.card}>
            
            {character.name && <div className={styles.charName}>
            <img src={character.image} alt={character.name} className={styles.images} />
            <h2>{character.name}</h2>

            </div>}
            

                
            
            
            <div className={styles.cardInfo}>
            {character.status && <h2>Status: {character.status}</h2>}
            {character.species && <h2>Specie: {character.species}</h2>}
            {character.gender && <h2>Gender: {character.gender}</h2>}
            {character.origin.name && <h2>Origin: {character.origin.name}</h2>}
            {character.id && <h2>ID: {character.id}</h2>}
            

        <Link to='/home'>
        <button className={styles.back}>Back Home</button>
        </Link>
            </div>



        </div>
        )}
    </div>
    )
}


