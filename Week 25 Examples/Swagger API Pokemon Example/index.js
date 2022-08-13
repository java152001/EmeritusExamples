const express = require('express');
const app  = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const bodyParser = require('body-parser');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Test API',
            version: '1.0.0'
        }
    },
    apis: ['index.js']
};

app.use(bodyParser.json());

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerDocs));



const allPokemon = [
    {
        name: 'Bulbasaur',
        number: '001',
        type: 'Grass/Poison',
        moves: ['Tackle', 'Growl', 'Vine Whip', 'Leech Seed']
    },
    {
        name: 'Charmander',
        number: '004',
        type: 'Fire',
        moves: ['Scratch', 'Growl', 'Ember', 'Flamethrower']
    },
    {
        name: 'Squirtle',
        number: '007',
        type: 'Water',
        moves: ['Tackle', 'Tail Whip', 'Bubble', 'Withdraw']
    }
]

/**
 * @swagger
 * /pokemon:
 *      get:
 *          description: Get All Pokemon
 *          responses:
 *              200:
 *                  description: Great Success
 */
app.get('/pokemon', function(req, res) {
    res.send(allPokemon);
})

/**
 * @swagger
 * /pokemon:
 *      post:
 *          description: Add a Pokemon
 *          summary: Add a New Pokemon to the List
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: object
 *                          properties: 
 *                              name: 
 *                                  type: string
 *                                  description: The Pokemon Name
 *                                  example: Pikachu
 *                              number: 
 *                                  type: string
 *                                  description: The Pokemon Number
 *                                  example: 014
 *                              type: 
 *                                  type: string
 *                                  description: The Pokemon Type
 *                                  example: Electric
 *                              moves:
 *                                  type: array
 *                                  items:
 *                                      type: string
 *                                      description: A Pokemon's Moves
 *                                  example:
 *                                      - Thunder Shock
 *                                      - Tackle
 *                                      - Thunder Wave
 *                                      - Agility
 *                              
 *          responses:
 *              201:
 *                  description: Pokemon Succesfully Added!
 */
app.post('/pokemon', function(req, res) {
    const pokemon = req.body;

    console.log(pokemon);

    allPokemon.push(pokemon);

    console.log(allPokemon);

    res.send('Pokemon Added!');
})

app.get('/', function(req, res) {
    res.send('Hi World!');
})

app.listen(3000, function() {
    console.log('listening on port 3000');
})