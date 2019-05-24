const axios = require('axios')
const URL = "http://adab8046.ngrok.io/"


//Axios Header 
axios.defaults.headers.post['Content-Type'] = 'application/JSON';


const getHoward = (id) => {
  axios.get(URL + "profile/" + id + "/").then((response) => {
    console.log(response.data)

    return response.data
  }).catch((error) => {
    console.log(error) 
  })
}

const model = {
  id: 22,
  first_name: "Howard",
  last_name: "Lin", 
  email: "WebGuy@email.com"
}


const createHoward = (howardObject) => {
  axios.post(URL + "profile/", howardObject).then((response) =>{
    console.log(response)
  }).catch((error) =>{
    console.log(error)
  })
}

createHoward(model)