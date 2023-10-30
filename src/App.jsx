import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '123-123-6999' }
  ]) 
  const [newName, setNewName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
    const newPerson = { name: newName, phone: phoneNum };
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
      {persons.map(person => <p key={person.name}>{person.name} p# {person.phone}</p>)}
    </div>
  )
}

export default App