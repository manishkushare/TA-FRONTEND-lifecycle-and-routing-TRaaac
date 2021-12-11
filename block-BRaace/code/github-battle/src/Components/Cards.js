import { Link } from "react-router-dom";
function Cards(props) {
  let data = [...props.data.items];
  data = data.slice(0, 20);
  console.log(data);
  return (
    <article  className='cards'>
      <ul className="cards-list">
        {
          data.map((card,id) => {
            return (
              <li className="card" key={card.id}>
                <span>#{id+1}</span>
                <div className="image-wrapper">
                  <img src={card.owner.avatar_url} alt="" />
                </div>
                <h2>{card.owner.login}</h2>
                <ul className="info">
                  <a href={card.owner.html_url}>
                    <li>
                      <span><i className="fas fa-user"></i></span>
                      {card.owner.login} 
                    </li>
                  </a>
                  <li>
                    <span><i class="fas fa-star"></i></span>
                    {card.watchers} Stars
                  </li>
                  <li>
                    <span><i class="fas fa-code-branch"></i></span>
                    { card.forks} Forks
                  </li>
                  <li>
                    <span><i class="fas fa-cogs"></i></span>
                    {card.open_issues} Open Issues
                  </li>
                </ul>
              </li>
            )
          })
        }
      </ul>
    </article>
  )
}
export default Cards;