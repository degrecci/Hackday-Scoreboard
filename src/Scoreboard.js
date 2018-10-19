import React, { Component } from 'react';

import { GIT_SEARCH_URL } from './constants/gitSearchUrl';
import searchQuery from './utils/searchQuery';
import USERS_LIST from './constants/usersList';

import './Scoreboard.css';

export default class Scoreboard extends Component {
  state = {
    content: {},
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

  countPRsByUsers = (items, user) => {
    let count = 0;

    items.map(item => {
      if(item.user.login=== user) {
        count++
      }
    })

    return count;
  }

  render() {
    const { content, isLoading } = this.state;
    const isUsersListEmpty = 0 === USERS_LIST.length;

    return (
      <div className="scoreboard">
        {(!isUsersListEmpty && !isLoading) &&
          <div>
            <h1 className="scoreboard__title">PULL REQUEST SCOREBOARD</h1>
            <ul className="scoreboard__users-list">
            {USERS_LIST.map((user, index) => {
              return (
                <li key={index} className="scoreboard__users-list-item">
                  {user} {this.countPRsByUsers(content.items, user)}
                </li>
              )
            })}
            </ul>
            <h2 className="scoreboard__total-score">TOTAL {content.total_count}</h2>
          </div>
        }
        {isUsersListEmpty &&
          <h1>ADICIONE USUÁRIOS GITHUB NO ARQUIVO usersList.js</h1>
        }
      </div>
    )
  }
}
