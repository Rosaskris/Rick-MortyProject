import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './favorites.module.css'
import { orderCards,filterCards, removeFav } from '../Redux/action-type';
import { useDispatch } from 'react-redux';
import { useState } from 'react';



export default function Favorites(props){
    const dispatch= useDispatch();
    let myFavorites = useSelector(state => state.myFavorites);

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
    if(myFavorites.length){
    return(
        <div>
        <div className={styles.selectors}>
        <select name='order' onChange={handleOrder} className={styles.order}>
            <option className={styles.aButton} value="A">Ascendente</option>
            <option className={styles.dButton} value="D">Descendente</option>
        </select>

        <select name="filter" onChange={handleFilter} className={styles.filter}>
            <option value="Male" className={styles.male}>Male</option>
            <option value="Female" className={styles.female}>Female</option>
            <option value="Genderless" className={styles.genderless}>Genderless</option>
            <option value="unknown" className={styles.unknown}>unknown</option>
            <option value="All" className={styles.all}>Show all</option>
        </select>
        </div>

        <div id= 'divContainer' className={styles.cardsContainer}>
        {myFavorites.map(char => (
        <Card key={char.id} image={char.image} name={char.name} status={char.status} species={char.species} gender={char.gender} origin={char.origin} onClose={onCloseFav} id={char.id}/>
        ))}

        </div>
        </div>

    )
} else {
    return(
        <div>
        <div className={styles.selectors}>
        <select name='order' onChange={handleOrder} className={styles.order}>
            <option className={styles.aButton} value="A">Ascendente</option>
            <option className={styles.dButton} value="D">Descendente</option>
        </select>

        <select name="filter" onChange={handleFilter} className={styles.filter}>
            <option value="Male" className={styles.male}>Male</option>
            <option value="Female" className={styles.female}>Female</option>
            <option value="Genderless" className={styles.genderless}>Genderless</option>
            <option value="unknown" className={styles.unknown}>unknown</option>
            <option value="All" className={styles.all}>Show all</option>
        </select>
        </div>

        <div>
            <h1 className={styles.error}>There are no favorites to display</h1>
        </div>
        </div>
    )
}
}

