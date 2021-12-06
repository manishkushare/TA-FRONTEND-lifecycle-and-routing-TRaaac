function Age(props) {
  return (
    <>
      <h2>My age is</h2>
      <h3>{props.data.dob.age}</h3>
    </>
  )
}

export default Age;