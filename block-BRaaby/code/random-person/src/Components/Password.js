function Password(props) {
  return (
    <>
      <h2>My Password is</h2>
      <h3>{props.data.login.password}</h3>
    </>
  )
}

export default Password;