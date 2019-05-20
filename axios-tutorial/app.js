const axios = require('axios')
const URL = 'Some URL'


// Defining the default post headers
axios.defaults.headers.post['Content-Type'] = 'application/JSON';


// Specifying the model 
var model = {
  "Some Model": "Model Answer"
}


// When you would to read a model from a database axios.get(url)
var getModel = () => {
  //The URL should be specific to the model
  // i.e if you are looking for a profile with an id, the url might be 
  // https://localhost/8000/profile/1 
  // Then the statement would be 
  // return axios.get('https://localhost/8000/' + 'profile/' + id )
  // Note that in this function the id is not passed in as a parameter, but it would be in the above statement 
  return axios.get(URL)
}

// When you would want to create a model, use axios.post(url, data)
var postModel = () => {
  return axios.post(URL, model)
  // You would want to check if the request was actually made, a response will be given back from the server
  .then((response) => {
    console.log(response)
  })
  // If there's any error 
  .catch((error) =>{
    console.log(error)
  }) 
}

// When you would want to update a model, use axios.put(url, data)
var updateModel = () => {
  return axios.put(URL, model)
  .then((response) => {
    console.log(response)
  }).catch((error) =>{
    console.log(error)
  }) 
}

// Straight forward, if you would want to delete a model, use axios.deelte(url, data)
var deleteModel = () => {
  return axios.delete(URL, model)
  .then((response) => {
    console.log(response)
  }).catch((error) =>{
    console.log(error)
  }) 
}

// Lets run it! 
console.log(getModel()) 