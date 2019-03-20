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
        "orientation": [],
        "creating-a-learning-circle": [],
        "courses-and-topics": [],
        "promotion-and-outreach": [],
        "facilitation": [],
        "reflection-and-wrapping-up": [],
        "testimony": [],
      }
    };
    this.populateResources = () => this._populateResources();
  }

  componentDidMount() {
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
      <div className="row resources-container" id="resources-container">
        <div className="col-md-10 categories-container">
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
          <div className="handbook-container">
            <div className="content">
              <div className="row">
                <div className="col-12">
                  <p className="large bold">Are you looking for the Facilitator Handbook?</p>
                  <p>You may prefer to use the offline, printable version of our facilitator resources. The content is a bit different (no videos) and it may not be as up-to-date as the online resources.</p>
                  <p><a href="https://www.p2pu.org/assets/uploads/learning_circle_downloads/facilitator_handbook.pdf">Click here to download the Faciliator Handbook (PDF)</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 hidden-on-mobile menu-container">
          <Affix container={document.getElementById('resources-steps')} offsetTop={64}>
            <ResourceCategoriesMenu />
          </Affix>
        </div>
      </div>
    );
  }
}
