function Name(props) {
  return (
    <>
      <h2>My Name is</h2>
      <h3>{props.data.name.title + " " + props.data.name.first + " " + props.data.name.last}</h3>
    </>
  )
}
export default Name;