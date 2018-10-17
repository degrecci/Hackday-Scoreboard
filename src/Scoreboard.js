import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Scoreboard extends Component {
  componentDidMount = () => {
    fetch('https://api.github.com/search/commits?q=author:victorperin', {
      headers: new Headers({
        'Accept': 'application/vnd.github.cloak-preview'
      })
    })
      .then(response => console.log(response))
  }
    
  render() {
    return (
      <div>
        Blaaaaa
      </div>
    )
  }
}
