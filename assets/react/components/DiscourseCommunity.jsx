import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { filter, find } from "lodash";
import { DISCOURSE_API_URL } from "../constants";
import DiscourseTopic from "./DiscourseTopic";
import * as topicJSON from "../fixtures/latestTopics.json";
import * as siteJSON from '../fixtures/site.json';

export default class FacilitatorResources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: topicJSON.topic_list.topics,
      users: topicJSON.users,
      categories: siteJSON.categories
    };
    this.populateResources = () => this._populateResources();
    this.populateCategories = () => this._populateCategories();
  }

  componentWillMount() {
    // this.populateResources();
    // this.populateCategories();

  }

  _populateResources() {
    const apiEndpoint = `${DISCOURSE_API_URL}/latest.json`;

    axios.get(apiEndpoint).then(res => {
      this.setState({ topics: res.topic_list.topics, users: res.users });
    });
  }

  _populateCategories() {
    const apiEndpoint = `${DISCOURSE_API_URL}/site.json`;

    axios.get(apiEndpoint).then(res => {
      this.setState({ categories: res.categories });
    });
  }

  render() {
    return (
      <div>
        <header>
          <div className="subtitle">
            <div className="underline">
              <div className="text">
                <h3>Join the Community</h3>
              </div>
            </div>
          </div>
        </header>
        <div className="topics col-xs-12">
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
              {this.state.topics.map(topic => {
                const posters = topic.posters.map(poster => poster.user_id);
                const users = filter(this.state.users, user => {
                  return posters.includes(user.id);
                });
                const category = find(this.state.categories, [
                  'id', topic.category_id
                ]);
                console.log('categories', this.state.categories)
                console.log("topic.category_id", topic.category_id);

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
        <div className="col-xs-12">
          <button className="btn p2pu-btn blue">Go to the forum</button>
        </div>
      </div>
    );
  }
}
