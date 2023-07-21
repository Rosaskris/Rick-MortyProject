import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './favorites.module.css'
import { orderCards,filterCards, removeFav } from '../Redux/action-type';
import { useDispatch } from 'react-redux';
import { useState } from 'react';



export default function Favorites(props){


    const dispatch= useDispatch();
    let myFavorites = useSelector(state => state.myFavorites);
    console.log(myFavorites)


    const[aux, setAux]=useState(false)

    const handleOrder=(e)=>{
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }

    const handleFilter=(e)=>{
        dispatch(filterCards(e.target.value))
    }
    const onCloseFav=(id)=>{
        dispatch(removeFav(id))
     }

    return(
        <div>
        <div className={styles.selectors}>
        <select name='order' onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>

        <select name="filter" onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
        </div>

        <div id= 'divContainer' className={styles.cardsContainer}>
        {myFavorites.map(char => (
        <Card key={char.id} image={char.image} name={char.name} status={char.status} species={char.species} gender={char.gender} origin={char.origin} onClose={onCloseFav} id={char.id}/>
        ))}

        </div>
        </div>

    )
}

