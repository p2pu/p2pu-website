import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ApiHelper from '../helpers/ApiHelper'
import NumberWithLabel from './common/NumberWithLabel'

export default class LearningCirclesStats extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.api = new ApiHelper('stats');
    this.populateStats = () => this._populateStats();
    this.triggerCountup = () => this._triggerCountup();
    this.resetCountup = () => this._resetCountup();
    this.populateStats();
  }

  _populateStats() {
    const params = {}
    const callback = (response, options) => {
      this.setState({ stats: response })
    }

    const opts = { params, callback }

    this.api.fetchResource(opts);
  }

  render() {
    const stats = this.state.stats;
    if (stats) {
      return (
        <div className="stacked-numbers">
          <div className="col-sm-12 col-md-4 card">
            <i className="material-icons">group</i>
            <h4 className="bold">
              <NumberWithLabel
                number={stats.active_learning_circles}
                label='learning circles'
              />
            </h4>
            <p>{`${stats.active_learning_circles} peers have met face-to-face to learn together in their neighborhoods.`}</p>
          </div>
          <div className="col-sm-12 col-md-4 card">
            <i className="material-icons">important_devices</i>
            <h4 className="bold">
              <NumberWithLabel
                number={stats.facilitators}
                label='courses'
              />
            </h4>
            <p>Community members use free, online courses from around the web.</p>
          </div>
          <div className="col-sm-12 col-md-4 card">
            <i className="material-icons">pin_drop</i>
            <h4 className="bold">
              <NumberWithLabel
                number={stats.cities}
                label='participating cities'
              />
            </h4>
            <p>Learning circles meet in public spaces like libraries and community centers.</p>
          </div>
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

