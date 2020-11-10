import React from 'react';
import ReactDOM from 'react-dom';

import GitHubEditor from './components/GitHubEditor';

var match = location.search.match(/[?&]token=([^&]+)(&|$)/);
const token = match && decodeURIComponent(match[1].replace(/\+/g, " "));

ReactDOM.render(
  <GitHubEditor
    token={token}
  />, document.getElementById('github-editor-component')
);

