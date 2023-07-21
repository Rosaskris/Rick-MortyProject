import styles from '../src/App.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import {Routes, Route, useLocation} from 'react-router-dom';
import Favorites from './components/Favorites';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import Error from './components/404/Error'
import Form from './components/Form/Form';
import {useNavigate} from 'react-router-dom'
import Menu from './components/Menu';



function App() {
   const [characters, setCharacters]= useState([])
   const [id, setId] = useState('');
   const [access, setAccess]= useState(false)

   // const EMAIL='prueba@mail.com'
   // const PASSWORD= 'pass123'
   const navigate= useNavigate()

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }

   const logOut = () => {
      setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
   axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
   .then(({data}) => {
         if (!characters.some((char) => char.id === data.id)){
         setCharacters((oldChars) => [...oldChars, data])}
      
   })
   .catch((error) => {
   window.alert('¡No hay personajes con este ID!')
   });
   }

   const onClose=(id)=>{
      const filteredCharacters = characters.filter((character) => character.id != id);
      setCharacters(filteredCharacters);
   }

   const randomChar=()=>{
      let randomId= Math.floor(Math.random() * 826)
      axios.get(`http://localhost:3001/rickandmorty/character/${randomId}`)
   .then(({data}) => {
         if (!characters.some((char) => char.id === data.id)){
         setCharacters((oldChars) => [...oldChars, data])}
      
   })
   }

   let location= useLocation()

   return (
      <div id='app' className={styles.background}>
         {location.pathname!=='/' && <Nav search={onSearch}  random={randomChar}/>}
         {location.pathname!== '/' && <Menu logOut={logOut}/>}
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} id={id}/>}/>
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<Error/>} />
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>

      </div>
   );
}

export default App;
