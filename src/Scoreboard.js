import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { GIT_SEARCH_URL } from './constants/gitSearchUrl';
import searchQuery from './utils/searchQuery';
import USERS_LIST from './constants/usersList';

export default class Scoreboard extends Component {
  state = {
    content: '',
    isLoading: true,
  }

  componentDidMount = () => {
    fetch(`${GIT_SEARCH_URL}${searchQuery}`, {
      method: 'get',
      headers: new Headers({
        'Accept': 'application/vnd.github.cloak-preview'
      })
    })
      .then(response => {
        response.json()
          .then(data => {
            this.setState({
              content: data,
              isLoading: false,
            });
          });
      })
  }

  render() {
    const { content } = this.state;
    console.log(USERS_LIST);

    return (
      <div>
        <h1>TOTAL DE PULL REQUESTS {content.total_count}</h1>
        <ul>
        {USERS_LIST.map(user => {
          <li>{user}</li>
        })}
        </ul>
        {/* {JSON.stringify(this.state.content)} */}
      </div>
    )
  }
}
