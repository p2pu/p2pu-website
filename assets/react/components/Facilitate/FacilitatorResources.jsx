import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { DISCOURSE_API_URL, DISCOURSE_CATEGORIES } from "../../constants";
import ResourceCategory from "./ResourceCategory";

export default class FacilitatorResources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: {
        "getting-started": [],
        "courses": [],
        "promotion": [],
        "facilitation-tips": [],
        "activities": [],
        "wrapping-up": [],
      }
    };
    this.populateResources = () => this._populateResources();
  }

  componentWillMount() {
    this.populateResources();
  }

  _populateResources() {
    DISCOURSE_CATEGORIES.map(category => {
      const apiEndpoint = `${DISCOURSE_API_URL}/c/learning-circles/${
        category.slug
      }.json?tags=featured`;

      axios.get(apiEndpoint).then(res => {
        this.setState({
          topics: {
            ...this.state.topics,
            [category.slug]: res.data.topic_list.topics
          }
        });
      });
    });
  }

  render() {
    return (
      <div>
        <header>
          <div className="subtitle">
            <div className="underline">
              <div className="text">
                <h3>Resources for Facilitators</h3>
              </div>
            </div>
          </div>
        </header>
        {DISCOURSE_CATEGORIES.map((category, index) => {
          const topics = this.state.topics[category.slug];
          if (topics && !!topics.length) {
            return (
              <ResourceCategory
                topics={topics}
                category={category}
                key={category.slug}
                step={index + 1}
              />
            );
          }

          return <div key={category.slug} />;
        })}
      </div>
    );
  }
}
