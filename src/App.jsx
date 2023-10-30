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
    setPersons(persons.concat({ name: newName }));
    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form>
        <div>
          name: <input value={newName} onChange={handleInput} />
        </div>
        <div>
          <button onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, id) => <p key={id}>{person.name}</p>)}
    </div>
  )
}

export default App