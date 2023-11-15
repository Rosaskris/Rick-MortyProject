import axios from "axios";
import { useSelector } from "react-redux";
const ADD_FAV='ADD_FAV'
const REMOVE_FAV= 'REMOVE_FAV'
const FILTER= 'FILTER'
const ORDER= 'ORDER'
const LOAD_FAVS= 'LOAD_FAVS'
const GET_USER= 'GET_USER'


// ACTION | addFav
const loadFavorites= ()=>{
    const user= useSelector(state=>state.user)
    const endpoint = `http://localhost:3001/rickandmorty/fav?user=${user}`;
    return async (dispatch) => {
        try{
        const {data}= await axios.get(`${endpoint}`)
                return dispatch({
                    type: LOAD_FAVS,
                    payload: data,
                    
                });
        }
        catch (err){
            throw(err)
        }
    };
}

const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try{
        const {data}= await axios.post(`${endpoint}`,character)
                return dispatch({
                    type: ADD_FAV,
                    payload: data,
                    
                });
        }
        catch (err){
            throw(err)
        }
    };
};

const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/';
    return async (dispatch) => {
        try{
        const {data}= await axios.delete(endpoint+id)
                return dispatch({
                    type: REMOVE_FAV,
                    payload: data,
                });
        }
        catch(err){
            throw(err)
        }
    };
};

const getUser=(user)=>{
    return{
        type:'GET_USER',
        payload:user
    }
}

const filterCards=(gender)=>{
    return{
        type:'FILTER',
        payload: gender
    }
}

const orderCards=(orden)=>{
    return{
        type:'ORDER',
        payload:orden
    }
}

export {addFav,removeFav,filterCards,orderCards,loadFavorites,getUser, GET_USER, LOAD_FAVS, ADD_FAV, REMOVE_FAV, FILTER, ORDER} 