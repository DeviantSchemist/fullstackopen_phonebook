import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')

  const [filterState, setFilterState] = useState('')

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