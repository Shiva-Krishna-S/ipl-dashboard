import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {iplTeam} = props
  const {id, name, teamImgUrl} = iplTeam

  return (
    <li className="team-container">
      <Link className="team-link" to={`/team-matches/${id}`}>
        <div>
          <img className="team-logo" src={teamImgUrl} alt={name} />
        </div>
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
