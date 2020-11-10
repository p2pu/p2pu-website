import React from 'react';
import ReactDOM from 'react-dom';
const { Octokit } = require("@octokit/rest");

const GitHubLogin = () => (
  <a href="http://localhost:8000/ghauth/redirect">Log in with GitHub</a>
);

const Editor = (props) => (
  <textarea>{props.content}</textarea>
);

class GitHubEditor extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    const octokit = new Octokit({
      auth: this.props.token,
    });

    octokit.request("/user").then( resp => {
      this.setState({'user': resp.data});
    });
    octokit.request("/repos/p2pu/p2pu-website/contents/en/").then( resp => {
      this.setState({'repo': resp.data})
    });

  }

  onSelect = (file) => {
    this.setState({selected: file});
    const octokit = new Octokit({
      auth: this.props.token,
    });
    octokit.request(`/repos/p2pu/p2pu-website/contents/${file.path}`).then( resp => {
      this.setState({'selectedContent': resp.data})
    });
  }

  render(){
    const {token} = this.props;
    const {user, repo=[]} = this.state;
    if (!token) {
      return <GitHubLogin/>;
    }
    let editor = null;
    if (this.state.selectedContent) {
      editor = <Editor content={atob(this.state.selectedContent.content)} />
    }
    return (
      <div>
        <h1>GitHub Editor</h1>
        {user && <p>Hello there {user.name}</p>}
        {editor}
        <ul>
        { 
          repo.map( file => (
            <li key={file.path} onClick={() => this.onSelect(file)} >{file.name}{file.type == 'dir' && '/'}</li>
          ))
        }
        </ul>
      </div>
    );
  }
}

export default GitHubEditor;
