import React, { Component } from 'react'

export default class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = { content: '' }
    this.handleChange = (e) => this._handleChange(e)
  }

  _handleChange(e) {
    debugger;
    this.setState({ content: e })
    console.log(e);
  }

  render() {
    return(
      <div class="search-form col-md-12">
        <p>I live in <input type="text" placeholder={this.props.placeholder} value={this.state.content} onChange={this.handleChange} /></p>
      </div>
    )
  }
}
