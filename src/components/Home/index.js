import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoaded: false}

  componentDidMount() {
    this.getTeamsListData()
  }

  getTeamsListData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const reqData = await response.json()
    const formattedList = reqData.teams.map(eachObj => ({
      name: eachObj.name,
      id: eachObj.id,
      teamImgUrl: eachObj.team_image_url,
    }))
    this.setState({teamsList: formattedList, isLoaded: true})
  }

  render() {
    const {teamsList, isLoaded} = this.state
    return (
      <div className="home-container">
        <div className="home-sub-container">
          <div className="home-header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="home-title">IPL Dashboard</h1>
          </div>
          {!isLoaded ? (
            <div className="loader-container">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="teams-container">
              {teamsList.map(eachTeam => (
                <TeamCard key={eachTeam.id} iplTeam={eachTeam} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
