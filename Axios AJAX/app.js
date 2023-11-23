//& ------------

//^ What is JS Library ?
//* - JavaScript libraries are collections of prewritten code that can be used and reused to perform common JavaScript functions.
//* - Someone else have done all the work for you and we just have to use it.
//* - While using it , you dont have to know how it is build ,we just have to focus on how use it and make my code more efficient and productive.
//* - React is a JS LIBRARY

//& ------------

//^ What is AJAX?
//* - AJAX stands for Asynchronous JavaScript and XML(Extensible Markup Language)
//* - AJAX enables web pages to update dynamically by exchanging data with a server in the background, without reloading/refreshing the entire page.This is Asynchronous Task as its done in background.
//* - Its not a programming language 
//* - Its a Technique to retrive data from different servers
//* - Multiple Request can be done in background.

//& ------------

//^ How to apply an AJAX?

//* - STEP-1 - Create an XMLHTTPREQUESTOBJECT()

//* - This Object Helps to exchange data in background.

var xhttp = new XMLHttpRequest()

//* - STEP-2 - Open a Request to the server

//* - SYNTAX - xhttp.open(method,url/filename,boolean(T/F))
//* - method can be GET , POST , PATCH , PUT , DELETE
//* - Third Parameter - True(means its an AJAX Request) or False(Not an AJAX Request)


xhttp.open("GET","https://randomuser.me/api/",true)

//* - STEP-3 - Handle the request from the server

//* - Now we have made the request in Step-2 , we have to handle the request of the server.

//* -The "readyState" property holds the status of the XMLHttpRequest.
//* - The "onreadystatechange" property defines a function to be executed.
//* - when the readyState changes, the onreadystatechange triggers
//* - The "status" property and the statusText property holds the status of the XMLHttpRequest object.

//* -readyState: Holds the status of XMLHTTPREQUEST
//| -     0:request not initialized
//| -     1:server connection established
//| -     2:request received
//| -     3:processing request
//| -     4:request finished and response ready

//* - Status :
//| -     200:"OK" 
//| -     403:"forbidden"
//| -     404:"Page not found"


xhttp.onreadystatechange = function(){
    // console.log(xhttp);
    if(xhttp.readyState == 4 && xhttp.status == 200){
        console.log(JSON.parse(xhttp.responseText));
    }
}

//* - STEP-4 - We have to send the request

// xhttp.send()

//& ------------

//* - FETCH internally uses AJAX

//^ Lets create the our OWN Fetch Function 

  // import {customFetch} from "./customFetch.js";

  // customFetch('https://randomuser.me/api/')
  //   .then(response => {
  //     console.log(JSON.parse(response));
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });


//& ------------

//^ What is Axios ?
//* - Axios is not a part of vanilla JavaScript
//* - It is a popular JavaScript library used for making HTTP requests in web applications.
//* - Axios simplifies making HTTP requests from the browser/Node.js by providing an easy-to-use API for handling XMLHttpRequests and the fetch API.
//* - Axios uses promises, making it easy to write asynchronous code and handle responses in a more readable and efficient way.
//* - Supports more browsers than fetch.

//& ------------

//^ SYNTAX OF AXIOS
// const url = 'https://randomuser.me/api/'

// axios.get(url)
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

//& ------------
//^ What are different types of requests we use while FETCHING?

//* - 1. GET: Used to retrieve data from a specified resource.
//* - 2. POST: Sends data to the server to create or update a resource.
//* - 3. PUT: Sends data to the server to update or replace a resource.
//* - 4. DELETE: Deletes the specified resource.
//* - 5. PATCH: Applies partial modifications to a resource.


//todo | THESE ARE ALSO CALL REST API (Representational State Transfer Application Programming Interface) |

//~ LETS SEE EACH ONE OF THEM WITH EXAMPLES

//! ------------------

//^ - 1. GET: Used to retrieve data from a specified resource.

//& @@@@@@@@@@ G E T @@@@@@@@@@@@@@@@

//* - Using Fetch API for GET request
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error fetching data:', error));

//* - Using Axios for GET request
// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

//! ------------------

//^ - 2. POST: Sends data to the server to create or update a resource.
//* - Writing a letter to a friend and sending it.
//* - Adding a new drawing to your art collection.
//* - Adding a new user to website.

//& @@@@@@@ P O S T @@@@@@@@@@@@@@@

//* - Using Fetch API for POST request
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'New Post',
//     body: 'This is a new post in kalvium',
//     userId: 55566
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8'
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error posting data:', error));

//* - Using Axios for POST request
// axios
//   .post("https://jsonplaceholder.typicode.com/posts", {
//     title: "New Post",
//     body: "This is a new post.",
//     userId: 1,
//   })
//   .then((response) => {
//     console.log("Data posted:", response.data);
//   })
//   .catch((error) => {
//     console.error("Error posting data:", error);
//   });

//! ------------------

//^ - 3. PUT: Sends data to the server to update or replace a resource.
//* -PUT is like replacing something that already exists. It's about updating or changing the whole thing. For example:
//* -Replacing your old toy with a new one.
//* -Editing a drawing completely by erasing and drawing something entirely different.
//* -Updating a part of user info

//& @@@@@@@@@ P U T @@@@@@@@@@@@@@@

//* - Using Fetch API for PUT request
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify({
//     id: 1,
//     title: "Updated Post",
//     body: "This post has been updated.",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error updating data:", error));

//* - Using Axios for PUT request
// axios
//   .put("https://jsonplaceholder.typicode.com/posts/1", {
//     id: 1,
//     title: "Updated Post",
//     body: "This post has been updated.",
//     userId: 1,
//   })
//   .then((response) => {
//     console.log("Data updated:", response.data);
//   })
//   .catch((error) => {
//     console.error("Error updating data:", error);
//   });
//! ------------------

//^ - 4. DELETE: Deletes the specified resource.

//* -DELETE is like removing or getting rid of something completely
//* -Erasing a drawing entirely from your paper.
//* -Removing a user from website

//& @@@@@ D E L E T E @@@@@@@@@@@@

//* - Using Fetch API for DELETE request
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => {
    if (response.ok) {
      console.log("Post deleted successfully");
    } else {
      console.error("Failed to delete post");
    }
  })
  .catch((error) => console.error("Error deleting data:", error));

//* - Using Axios for DELETE request
// axios
//   .delete("https://jsonplaceholder.typicode.com/posts/101")
//   .then((response) => {
//     console.log("Post deleted successfully");
//   })
//   .catch((error) => {
//     console.error("Error deleting data:", error);
//   });

//^ - 5. PATCH: Applies partial modifications to a resource.

//* -PATCH is like making small changes or fixing something specific.
//* -Fixing a small tear in your favorite shirt.
//* -Adding more details to your drawing without redoing the entire thing.
//* -Patching a Tyre.
//* -Update a part of info of user without replacing the entire thing.
//! ------------------
//& @@@@ P A T C H @@@@@@@@@@@@@@@
//* - Using Fetch API for PATCH request
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PATCH",
//   body: JSON.stringify({
//     title: "Updated Title",
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log("Updated data:", data))
//   .catch((error) => console.error("Error patching data:", error));

//* - Using Axios for PATCH request
// axios
//   .patch("https://jsonplaceholder.typicode.com/posts/1", {
//     title: "Updated Title",
//   })
//   .then((response) => {
//     console.log("Updated data:", response.data);
//   })
//   .catch((error) => {
//     console.error("Error patching data:", error);
//   });

//! ------------------

//^ What is POSTMAN?

//* - POSTMAN isn't specifically a frontend tool or Method or property in JS.
//* - POSTMAN is a SOFTWARE.
//* - It is an API testing Platform
//* - We Test the apis that we create in a normal environment , with no code.
//* - POSTMAN is the Name of the API TESTING PLATFORM.
//* - Just like MAGGI is a very common name of all instant noodles.
//* - Similarily , POSTMAN is very common tool to test APIS.


//todo ---------------------------------XXXXXXXXXXXX--------------------------------------------------------



