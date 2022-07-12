const express = require('express')
const app = express()
const PORT = 8000

const rappers ={
    'cole': {
        'age': 32,
        'birthName': 'Jermaine Lamarr Cole',
        'birthLocation': 'Frankfurt, West Germany.'
    },

    'lil durk': {
        'age': 29,
        'birthName': 'Durk Derrick Banks',
        'birthLocation': 'Englewood, Chicago, Illinois, United States.'
    },

    'kendrick': {
        'age': 29,
        'birthName': 'Kendrick Lamar Duckworth',
        'birthLocation': 'Compton, California, United States.'
    },

    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown.'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if ( rappers[rapperName] ){
        response.json( rappers[rapperName] )
    }
    else{
        response.json( rappers['unknown'] )
    }
    
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! go catch it`);
})