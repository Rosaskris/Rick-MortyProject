const express= require('express')
const getCharById= require('../controllers/getCharByID');
const postFav= require('../controllers/postfav');
const login= require('../controllers/login');
const deleteFav= require('../controllers/deleteFav');
const postUser= require('../controllers/postUser');
const getFavs= require('../controllers/getFavs')
const getUsers= require('../controllers/getUsers')



const router= express.Router()

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav);
router.get("/fav", getFavs)
router.get("/users", getUsers)


module.exports= router