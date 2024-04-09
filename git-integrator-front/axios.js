import axios from "axios"
axios.defaults.baseURL="https://prueba-webhook.onrender.com/"

const back=axios.create({
    baseURL:"https://prueba-webhook.onrender.com/"
})

export default back;