import { useState, useEffect } from 'react'
import personService from './services/persons'

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')

  const [filterState, setFilterState] = useState('')

  useEffect(() => {
    personService.getAll().then(response => setPersons(response.data));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const newPerson = { name: newName, number: phoneNum };
    const nameExists = persons.find(person => person.name === newPerson.name);
    const personExists = persons.find(person => JSON.stringify({ ...person, id: 0 }) === JSON.stringify({ ...newPerson, id: 0 }));
    if (!personExists && !nameExists) {
      personService.create(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data));
          setNewName('');
          setPhoneNum('');
        })
      return;
    }
    else if (nameExists) {
      if (window.confirm(`${nameExists.name} is already added to phonebook, replace their old number with a new one?`)) {
        personService.update(nameExists, newPerson)
          .then(response => {
            let personReplace = [ ...persons ];
            personReplace[personReplace.indexOf(nameExists)] = response.data;
            setPersons(personReplace);
            setNewName('');
            setPhoneNum('');
          })
          .catch(error => console.error(error));
      }
    }
  }

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.deletePerson(id)
      .then(response => setPersons(persons.filter(person => person.id !== id)))
      .catch(err => console.log(`Unable to delete person with id ${id}`));
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterState={filterState} handleChange={(event) => setFilterState(event.target.value)} />
      <h3>add a new</h3>
      <PersonForm newName={newName} phoneNum={phoneNum} handleNameChange={(event) => setNewName(event.target.value)}
        handlePhoneChange={(event) => setPhoneNum(event.target.value)} handleSubmit={handleSubmit} />
      <h3>Numbers</h3>
      <Persons filterState={filterState} persons={persons} handleDelete={handleDelete} />
    </div>
  )
}

export default App