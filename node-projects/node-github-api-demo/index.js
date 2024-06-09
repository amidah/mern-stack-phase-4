const axios = require('axios');

async function getUser(username){

    try{
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response.data);
    }
    catch(error){
        console.log(error);
    }

}

getUser('amidah'); // replace with your github username