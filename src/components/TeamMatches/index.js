import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    bannerUrl: '',
    latestMatch: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetailsObj: data.latest_match_details,
      recentMatchesList: data.recent_matches,
    }
    const latestMatchDetails = {
      umpires: updatedData.latestMatchDetailsObj.umpires,
      result: updatedData.latestMatchDetailsObj.result,
      manOfTheMatch: updatedData.latestMatchDetailsObj.man_of_the_match,
      id: updatedData.latestMatchDetailsObj.id,
      date: updatedData.latestMatchDetailsObj.date,
      venue: updatedData.latestMatchDetailsObj.venue,
      competingTeam: updatedData.latestMatchDetailsObj.competing_team,
      competingTeamLogo: updatedData.latestMatchDetailsObj.competing_team_logo,
      firstInnings: updatedData.latestMatchDetailsObj.first_innings,
      secondInnings: updatedData.latestMatchDetailsObj.second_innings,
      matchStatus: updatedData.latestMatchDetailsObj.match_status,
    }
    const recentMatchesDetails = updatedData.recentMatchesList.map(eacItem => ({
      umpires: eacItem.umpires,
      result: eacItem.result,
      manOfTheMatch: eacItem.man_of_the_match,
      id: eacItem.id,
      date: eacItem.date,
      venue: eacItem.venue,
      competingTeam: eacItem.competing_team,
      competingTeamLogo: eacItem.competing_team_logo,
      firstInnings: eacItem.first_innings,
      secondInnings: eacItem.second_innings,
      matchStatus: eacItem.match_status,
    }))
    this.setState({
      bannerUrl: updatedData.teamBannerUrl,
      latestMatch: latestMatchDetails,
      recentMatches: recentMatchesDetails,
      isLoading: false,
    })
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {bannerUrl, latestMatch, recentMatches, isLoading} = this.state

    const backgroundColorClassName = this.getRouteClassName()

    return (
      <div className={`team-page-container ${backgroundColorClassName}`}>
        {isLoading ? (
          <div className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div className="team-page-sub-container">
            <img src={bannerUrl} alt="team banner" className="ipl-team-image" />
            <h1 className="heading-1">Latest Matches</h1>
            <LatestMatch key={latestMatch.id} latestMatch={latestMatch} />
            <ul className="each-match-container">
              {recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
