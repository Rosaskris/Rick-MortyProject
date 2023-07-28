const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('ROUTES testing', ()=>{
    it('Must return status: 200', async()=>{
        await agent.get('/rickandmorty/character/1').expect(200);
    })
    it('Must return an object including properties: "id", "name", "species", "gender", "status", "origin" e "image"',
    async ()=>{
        const {body}=await agent.get('/rickandmorty/character/1')
        expect(body).toHaveProperty('id' && 'name' && 'species' && 'gender' && 'status' && 'origin' && 'image')
    })
    it('If there is an error must return: 500', async()=>{
        await agent.get('/rickandmorty/character/1000').expect(500);
    })
}) 

describe("GET /rickandmorty/login", ()=>{
    it('Must provide access if credentials are correct', async()=>{
    const {body}=await agent.get('/rickandmorty/login/?email=prueba@mail.com&password=pass123')
    expect(body.access).toBeTruthy()
    })
    it('Must deny access if credentials are incorrect', async()=>{
    const {body}=await agent.get('/rickandmorty/login/?email=jelou@mail.com&password=12pass')
    expect(body.access).toBeFalsy()
    })
})

describe('POST /rickandmorty/fav', ()=>{
    const character1={
        name:'pepito',
        id:1
    }
    const character2={
        name:'pepita',
        id:2
    }

    it('Must return and array with the favorite added',async()=>{
        const {body}=await agent.post('/rickandmorty/fav/').send(character1)
        expect(body).toBeInstanceOf(Array)
        expect(body).toContainEqual(character1)
    })
    it('Must return an array with the previous and new favorite added', async()=>{
        const {body}=await agent.post('/rickandmorty/fav').send(character2)
        expect(body).toBeInstanceOf(Array)
        expect(body).toContainEqual(character1)
        expect(body).toContainEqual(character2)
    })
})

describe('DELETE /rickandmorty/fav/:id', ()=>{
    const character1={
        name:'pepito',
        id:1
    }
    const character2={
        name:'pepita',
        id:2
    }
    it('Returns the array of previous favs when the ID doesnt exists', async()=>{
        const {body}=await agent.delete('/rickandmorty/fav/5')
        expect(body).toBeInstanceOf(Array)
        expect(body).toContainEqual(character1)
        expect(body).toContainEqual(character2)
    })
    it('Deletes the fav correctly', async()=>{
        const {body}=await agent.delete('/rickandmorty/fav/1')
        expect(body).toBeInstanceOf(Array)
        expect(body).toContainEqual(character2)
    })
})