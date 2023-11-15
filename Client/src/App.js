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
import { useDispatch } from 'react-redux';
import { getUser } from './components/Redux/action-type';



function App() {
   const [characters, setCharacters]= useState([])
   const [id, setId] = useState('');
   const [access, setAccess]= useState(false)
   const dispatch=useDispatch()
   const navigate= useNavigate()

   const login= async(userData)=>{
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try{
         const {data}= await axios(URL + `?email=${email}&password=${password}`)
            const { access } = data;
            setAccess(access);
            if(access){
               dispatch(getUser(userData))
               navigate('/home')
            }
         }
      catch (err){
         window.alert('Wrong email or password')
      }
   }

   const logOut = () => {
      dispatch(getUser(null))
      setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch=async(id)=>{
      try{
         const {data}= await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
            if (!characters.some((char) => char.id === data.id)){
            setCharacters((oldChars) => [...oldChars, data])}
            
         
      }
   catch (err){
         window.alert('There are no characters with this ID!')
      }
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
         setCharacters((oldChars) => [...oldChars, data])} else{
               window.alert('This character already exists')
            }
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
