import { useState } from 'react'

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
  const [filterPeople, setFilteredPeople] = useState([])

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
      <span>filter shown with </span>
      <input type="text" value={filterState} onChange={(event) => setFilterState(event.target.value)} />
      <br />
      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input value={phoneNum} onChange={(event) => setPhoneNum(event.target.value)} />
        </div>
        <div>
          <button onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* {persons.map(person => <p key={person.name}>{person.name} p# {person.number}</p>)} */}
      {filterState ? persons.filter(person => person.name.toLowerCase().includes(filterState.toLowerCase())).map(person => <p key={person.name}>{person.name} p# {person.number}</p>)
        : persons.map(person => <p key={person.name}>{person.name} p# {person.number}</p>)}

    </div>
  )
}

export default App