import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatch
  return (
    <div className="latestMatch-container">
      <div className="recent-match-top-section">
        <div className="recent-match-top-section-text-container">
          <p className="opp-team-name">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="match-venue">At {venue}</p>
          <p className="match-venue">{result}</p>
        </div>
        <div className="img-container">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="opp-team-logo"
          />
        </div>
      </div>
      <hr className="separator" />
      <div className="match-stats">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
