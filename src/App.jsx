import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleInput = event => {
    setNewName(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    const newPerson = { name: newName };
    const personExists = persons.find(person => JSON.stringify(person) === JSON.stringify(newPerson));
    if (!personExists) {
      setPersons(persons.concat(newPerson));
      setNewName('');
      return;
    }

    alert(`${newName} is already added to phonebook`);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleInput} />
        </div>
        <div>
          <button onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App