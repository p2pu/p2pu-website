import React, { Component } from "react";
import ReactDOM from "react-dom";
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

export default DiscourseTopic;
