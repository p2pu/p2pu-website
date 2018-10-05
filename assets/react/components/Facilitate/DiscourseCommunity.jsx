import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { DISCOURSE_API_URL } from "../../constants";
import DiscourseTopic from "./DiscourseTopic";


export default class FacilitatorResources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      users: [],
      categories: [],
    };
    this.populateResources = () => this._populateResources();
    this.populateCategories = () => this._populateCategories();
  }

  componentWillMount() {
    this.populateResources();
    this.populateCategories();

  }

  _populateResources() {
    const apiEndpoint = `${DISCOURSE_API_URL}/tags/faq.json`;

    axios.get(apiEndpoint).then(res => {
      this.setState({ topics: res.data.topic_list.topics, users: res.data.users });
    });
  }

  _populateCategories() {
    const apiEndpoint = `${DISCOURSE_API_URL}/site.json`;

    axios.get(apiEndpoint).then(res => {
      this.setState({ categories: res.data.categories });
    });
  }

  render() {
    const top10topics = this.state.topics.slice(0,10);
    return (
      <div>
        <header>
          <div className="subtitle">
            <div className="underline">
              <div className="text">
                <h3>Frequently Asked Questions</h3>
              </div>
            </div>
          </div>
        </header>
        <div className="topics col-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Topic</th>
                <th scope="col">Category</th>
                <th scope="col">Users</th>
                <th scope="col">Replies</th>
                <th scope="col">Views</th>
                <th scope="col">Activity</th>
              </tr>
            </thead>
            <tbody>
              {top10topics.map(topic => {
                const posters = topic.posters.map(poster => poster.user_id);
                const users = this.state.users.filter(user => posters.includes(user.id));
                const category = this.state.categories.find(cat => ca.id == topic.category_id);
                return (
                  <DiscourseTopic
                    topic={topic}
                    key={topic.id}
                    users={users}
                    category={category}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-12">
          <a className="btn p2pu-btn blue" href="https://community.p2pu.org/">Go to the community</a>
        </div>
      </div>
    );
  }
}
