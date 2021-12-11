function ProfileThumbnail(props) {
  function handleClick(event){
    console.dir(event.target);
    const id = event.target.id
    props.clearData(id);
  }
  return (
    <div className="profile-thumbnail">
      <div className="thumbnail-image-wrapper">
        <img src={props.data.avatar_url} alt="" />
      </div>
      <h2>{props.data.login}</h2>
      <span id={props.user} onClick={handleClick}>X</span>
    </div>
  )
}
export default ProfileThumbnail;