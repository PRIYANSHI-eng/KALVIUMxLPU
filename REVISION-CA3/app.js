//~ Some other API URL Examples
//! 1)
// Base URL: https://jsonplaceholder.typicode.com
// Endpoints: /users, /users/1, /posts, /todos, etc.
//! 2) Pokemon API
// Base URL: https://pokeapi.co/api/v2
// Endpoints: /pokemon, /ability, /type, etc.
//! 3)
// Base URL: https://randomuser.me/api/

//^ FETCH

//* - .then and .catch

const url = "https://pokeapi.co/api/v2/pokemon";

// function getData(){
//     fetch(url).then((res)=>{
//         return res.json()
//     }).then((data)=>{
//         console.log("data: ", data);

//         //display

//     }).catch((err)=>{
//         console.log("err: ", err);
//     })
// }

// getData()

//* async await try catch

async function getData() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log("data: ", data);

    //display
  } catch (error) {
    console.log("error: ", error);
  }
}

// getData();

//^ AXIOS

//* - .then and .catch

function getData(){
    axios.get(url).then((res) => {
        console.log("res: ", res.data);
    }).catch((err) => {
        console.log("err: ", err);
    });

    
}

// getData()

//* - async await try catch

async function getData(){
    try {
        let res = await axios.get(url)
        let data = await res.data
        console.log("data: ", data);
    } catch (error) {
        console.log("error: ", error);
        
    }
}

getData()