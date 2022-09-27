import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { DISCOURSE_API_URL } from "../../constants";

const DiscourseTopic = props => {

  let [posts, setPosts] = useState([]);

  useEffect(() => {
    const apiEndpoint = `${props.topicUrl}.json`;

    axios.get(apiEndpoint).then(res => {
      if (res.data.post_stream){
        setPosts(res.data.post_stream.posts);
      }
    });
  }, []);

  const avatarUrl = post => DISCOURSE_API_URL + post.avatar_template.replace(/{size}/,'64');
  const formatDate = post => new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
  });

  return (
    <div>
        { posts.map( post => 
          <div key={post.post_number} className="row mb-1">
            <div className="col-1"><img src={avatarUrl(post)}/></div>
            <div className="col-11">
              <div><strong>{post.display_username}</strong> {formatDate(post)}</div>
              <div dangerouslySetInnerHTML={{__html:post.cooked}}></div>
            </div>
          </div>
        )}
    </div>
  )
};

export default DiscourseTopic;
