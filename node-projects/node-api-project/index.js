const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

fetch("https://reqres.in/api/users?page=2")
.then((value) => value.json())
.then((res) => {
    let users = res['data'];
    console.log(users);
})