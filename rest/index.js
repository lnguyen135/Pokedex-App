const express = require('express')
const axios = require('axios');
const cors = require("cors")

const app = express()
const port = 4000

app.use(cors())


app.get('/pokemon', async (req, res) => {

  console.log('in pokemon route');
  const pokemon = [];
 
  for(let i = 1; i <= 200; i++){
    let pokeResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    pokemon.push(pokeResponse.data)
   
    }
    
  //let pokeResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${1}`);
  res.json(pokemon)
  });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


