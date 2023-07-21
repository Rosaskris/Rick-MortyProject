import Card from '../Card/Card';
import styles from '../Cards/Cards.module.css'


export default function Cards(props) {
      return (
      <div id= 'divContainer' className={styles.cardsContainer}>
      {props.characters.map((char) => (
      <Card key={char.id} image={char.image} name={char.name} status={char.status} species={char.species} gender={char.gender} origin={char.origin.name} onClose={props.onClose} id={char.id}/>
      ))} 
      </div>)
      ;
}
