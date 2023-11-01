const Persons = ({ filterState, persons, handleDelete }) => {
  return (
    <>
      {filterState ? persons.filter(person => person.name.toLowerCase().includes(filterState.toLowerCase()))
        .map(person => (
          <>
            <span key={person.id}>{person.name} p# {person.number}</span>
            <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
            <br />
          </>
        ))
        : persons.map(person => (
          <>
            <span key={person.id}>{person.name} p# {person.number}</span>
            <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
            <br />
          </>
        ))}
    </>
  )
}

export default Persons