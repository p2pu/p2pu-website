import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { DISCOURSE_API_URL } from "../../constants";
import moment from "moment";


const DiscourseTopic = props => {
  const { topic, users, category } = props;
  const topicUrl = `${DISCOURSE_API_URL}/t/${topic.slug}`;
  const categoryUrl = `${DISCOURSE_API_URL}/c/${category.slug}`;
  const today = moment();
  const lastPost = moment(topic.last_posted_at);
  const lastActivity = lastPost.from(today, true);

  return (
    <tr key={topic.id} className="table-row">
      <td>
        <a href={topicUrl} className="topic-title">{topic.title}</a>
      </td>
      <td><a href={categoryUrl} className="category-name">{category.name}</a></td>
      <td className="users">
        {users.map(user => {
          const imagePath = user.avatar_template.replace('{size}', 25)
          return (
            <span title={`${user.username}`} key={user.username} className="avatar">
              <img src={`${DISCOURSE_API_URL}${imagePath}`} />
            </span>
          )
        })}
      </td>
      <td>{topic.reply_count}</td>
      <td>{topic.views}</td>
      <td>{lastActivity}</td>
    </tr>
  );
};

export default class DiscourseCommunity extends Component {
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

  componentDidMount() {
    this.populateResources();
    this.populateCategories();

  }

  _populateResources() {
    const apiEndpoint = `${DISCOURSE_API_URL}${this.props.discourse_path}`;

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
    let topicNodes = top10topics.map(topic => {
      const posters = topic.posters.map(poster => poster.user_id);
      const users = this.state.users.filter(user => posters.includes(user.id));
      const category = this.state.categories.find(cat => cat.id == topic.category_id) || {};

      return (
        <DiscourseTopic
          topic={topic}
          key={topic.id}
          users={users}
          category={category}
        />
      );
    });


    return (
      <div className="discourse-topics">
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
            {topicNodes}
          </tbody>
        </table>
      </div>
    );
  }
}
