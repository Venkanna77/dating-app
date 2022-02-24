import axios from 'axios'

const instance = axios.create({
  baseURL: "https://damp-beyond-85747.herokuapp.com/",
});

export default instance;