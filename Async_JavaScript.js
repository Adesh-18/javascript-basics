// Callback
//    ↓
// Promise
//    ↓
// async / await
//    ↓
// fetch()
//    ↓
// API

const function getUsers(){
    const response = await fetch("API_URL");
    const users = await response.json();
    console.log(users);
}