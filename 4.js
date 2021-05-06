const fetch = require('node-fetch');

function fetchArray(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        json.map(data => {
            console.log(data.name);
            return data.name
        });
    })
}

fetchArray()