const Persons = ({ filterState, persons }) => {
  return (
    <>
      {filterState ? persons.filter(person => person.name.toLowerCase().includes(filterState.toLowerCase())).map(person => <p key={person.id}>{person.name} p# {person.number}</p>)
        : persons.map(person => <p key={person.id}>{person.name} p# {person.number}</p>)}
    </>
  )
}

export default Persons