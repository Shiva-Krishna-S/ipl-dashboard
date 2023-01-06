import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails
  const resultClassName = matchStatus === 'Won' ? 'match-won' : 'match-lost'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="opp-team-image"
      />
      <p className="match-card-team-name">{competingTeam}</p>
      <p className="match-card-team-won">{result}</p>
      <p className={resultClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
