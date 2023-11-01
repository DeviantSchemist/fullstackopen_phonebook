import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')

  const [filterState, setFilterState] = useState('')
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => setPersons(response.data));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const newPerson = { name: newName, number: phoneNum };
    const personExists = persons.find(person => JSON.stringify(person) === JSON.stringify(newPerson));
    if (!personExists) {
      setPersons(persons.concat(newPerson));
      setNewName('');
      setPhoneNum('');
      return;
    }

    alert(`${newName} is already added to phonebook`);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterState={filterState} handleChange={(event) => setFilterState(event.target.value)} />
      <h3>add a new</h3>
      <PersonForm newName={newName} phoneNum={phoneNum} handleNameChange={(event) => setNewName(event.target.value)}
        handlePhoneChange={(event) => setPhoneNum(event.target.value)} handleSubmit={handleSubmit} />
      <h3>Numbers</h3>
      <Persons filterState={filterState} persons={persons} />
    </div>
  )
}

export default App