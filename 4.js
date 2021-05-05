const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(json => {
    let result = json.map(data => data.name);
    console.log(result)
})