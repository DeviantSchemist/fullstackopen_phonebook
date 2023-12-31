import axios from 'axios'

const baseURL = '/api/persons';



const getAll = () => {
  return axios.get(baseURL);
}

const create = newPerson => {
  return axios.post(baseURL, newPerson);
}

const deletePerson = personID => {
  return axios.delete(`${baseURL}/${personID}`);
}

const update = (person, newPerson) => {
  return axios.put(`${baseURL}/${person.id}`, newPerson);
}

export default { getAll, create, deletePerson, update }