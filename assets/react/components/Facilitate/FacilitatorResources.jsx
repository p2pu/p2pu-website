import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { DISCOURSE_API_URL, DISCOURSE_CATEGORIES } from "../../constants";
import ResourceCategory from "./ResourceCategory";
import ResourceCategoriesMenu from "./ResourceCategoriesMenu";
import Affix from './Affix';


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
      <div className="row">
        <div className="col-md-2 hidden-on-mobile">
          <Affix container={document.getElementById('facilitator-resources')} offsetTop={64}>
            <ResourceCategoriesMenu />
          </Affix>
        </div>
        <div className="col-md-10">
          {DISCOURSE_CATEGORIES.map((category, index) => {
            const topics = this.state.topics[category.slug];
            if (topics && !!topics.length) {
              return (
                <ResourceCategory
                  key={category.slug}
                  topics={topics}
                  category={category}
                  step={index + 1}
                />
              );
            }

            return <div key={category.slug} />;
          })}
        </div>
      </div>
    );
  }
}
