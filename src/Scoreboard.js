import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Scoreboard extends Component {
  state = {
    content: '',
  }
  componentDidMount = () => {
    fetch('https://api.github.com/search/issues?q=-label:invalid+created:2018-09-30T10%3A00%3A00%2B00%3A00..2018-11-01T12%3A00%3A00%2B00%3A00+type:pr+is:public+author:degrecci&per_page=300', {
      method: 'get',
      headers: new Headers({
        'Accept': 'application/vnd.github.cloak-preview'
      })
    })
      .then(response => {
        response.json().then(data => this.setState({ content: data}));
      })
  }
    
  render() {
    return (
      <div>
        {JSON.stringify(this.state.content)}
      </div>
    )
  }
}
