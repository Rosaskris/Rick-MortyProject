import styles from '../SearchBar/SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   const [id, setId]= useState('')

   const handleChange=(event)=>{
   event.preventDefault();
   onSearch(id);
   setId('')
   // setId(event.target.value)
}

   return (
      <div id='inputSearch' className={styles.searchBarDiv}>
         <form action="post" method='post' onSubmit={handleChange}>
         <input required placeholder='Character ID...' type='search' className={styles.input} onChange={event=>setId(event.target.value)} value={id}/>
         <button className={styles.buttonBuscar}>
         Add
         </button>
         </form>

      </div>
   );
}
