import axios from "axios";

const httpContact = axios.create({
  baseURL: "https://portfolionghiacao.herokuapp.com/"
})

export default httpContact;