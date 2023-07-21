import styles from './About.module.css'
import myImage from './IMG_20221004_134518_563.jpg'

export default function About(props){
    return(
        <div className={styles.cardContainer}>
        <div className={styles.card}>
            <div>
            <img className= {styles.images} src={myImage} alt='oh' /> 
            <div className={styles.charName}><h2>Krisbel Rosas</h2></div>
            </div>
                
            <div className={styles.cardInfo}>
                <h5>ipsum Lorem, ipsum dolor sit amet 
                    consectetur adipisicing elit. Odit nulla
                    repudiandae quos repellat nihil, magnam fuga
                    ratione voluptatum incidunt similique quia soluta
                    molestiae? Accusantium esse voluptate sapiente magni consectetur
                    totam.</h5>

            </div>
        </div>
        </div>
            

    )
}



