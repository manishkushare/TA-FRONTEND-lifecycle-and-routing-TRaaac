function Address(props) {
  return (
    <>
      <h2>My Address is</h2>
      <h3>{props.data.location.city +", "+ props.data.location.state+ ", "+ props.data.location.country}</h3>
    </>
  )
}

export default Address;