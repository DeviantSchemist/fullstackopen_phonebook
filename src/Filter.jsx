const Filter = ({ filterState, handleChange }) => {
  return (
    <>
      <span>filter shown with</span>
      <input type="text" value={filterState} onChange={handleChange} />
      <br />
    </>
  )
}

export default Filter