import axios from 'axios'

const baseURL = 'http://localhost:3001/persons';



const getAll = () => {
  return axios.get(baseURL);
}

const create = newPerson => {
  return axios.post(baseURL, newPerson);
}

const deletePerson = personID => {
  return axios.delete(`${baseURL}/${personID}`);
}

export default { getAll, create, deletePerson }