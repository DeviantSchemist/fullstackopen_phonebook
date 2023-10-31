const PersonForm = ({ newName, phoneNum, handleNameChange, handlePhoneChange, handleSubmit }) => {
  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={phoneNum} onChange={handlePhoneChange} />
      </div>
      <div>
        <button onClick={handleSubmit}>add</button>
      </div>
    </form>
  )
}

export default PersonForm