import React from 'react';
import moment from 'moment';
import ApiHelper from '../../helpers/ApiHelper'
import { API_BASE_URL } from '../../constants'


const TeamCard = ({ team }) => {
  console.log('team organizers', team.organizers.length)
  return(
    <div className="team-card">
      <a href={`/${team.page_slug}`} target="_blank" className="undecorated">
        <div className="content row align-items-center">

          <div className="image">
            <img src={team.image_url} />
          </div>

          <div className="info pl-3">
            <p className='bold mt-0 mb-2 team-name'>{team.name}</p>

            <div className="text-xs d-flex align-items-center">
              <i className="material-icons pr-2">group</i>
              <p className="mb-0">{`Team members: ${ team.member_count }`}</p>
            </div>

            <div className="text-xs d-flex align-items-center">
              <i className="material-icons pr-2">list</i>
              <p className="mb-0">{`Total learning circles: ${ team.studygroup_count }`}</p>
            </div>

            <div className="text-xs d-flex align-items-center">
              <i className="material-icons pr-2">event</i>
              <p className="mb-0">{`Established: ${ team.date_established }`}</p>
            </div>

              {
                (team.organizers.length > 0) &&
                <div className="text-xs d-flex align-items-center">
                  <i className="material-icons pr-2">face</i>
                  <p className="mb-0">{`Organizers: ${team.organizers.map(o => o.first_name).join(', ')}`}</p>
                </div>
              }

            </div>

        </div>
      </a>
    </div>
  )
}

class TeamsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
    this.api = new ApiHelper('teams');
    this.populateTeams()
  }

  populateTeams = () => {
    const params = { limit: 3, image: true }
    const callback = (response, options) => {
      console.log(response)
      this.setState({ teams: response.items })
    }

    const opts = { params, callback }

    this.api.fetchResource(opts);
  }

  render(){
    if (this.state.teams.length === 0) {
      return (
        <div />
      )
    }

    return (
      <div className="teams-feed">
        <h5 className="mt-0 mb-2">Featured Teams</h5>
        {this.state.teams.map( team => <TeamCard team={team} key={team.id} />)}
      </div>
    );
  }
}

export default TeamsFeed;