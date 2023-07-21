import styles from '../Nav/nav.module.css'
import SearchBar from "../SearchBar/SearchBar";
import {Link} from 'react-router-dom';



export default function Nav(props){
    return(
        <nav className={styles.nav}> 
        {/* <a alt='logo'><img className={styles.imgLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"/></a> */}
        <h1 className={styles.title}>Rick & Morty APP</h1>
        


        <div className={styles.divSearchBar}>
        <SearchBar onSearch={props.search}/>
        <button className= {styles.randomButton} onClick={props.random} >Random</button>
        </div>
        </nav>
    )
}