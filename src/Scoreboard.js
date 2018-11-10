import React, { useState, useEffect } from 'react';

import { GIT_SEARCH_URL } from './constants/gitSearchUrl';
import searchQuery from './utils/searchQuery';
import USERS_LIST from './constants/usersList';

import './Scoreboard.css';

export default function Scoreboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState({});

  useEffect(() => {
    fetch(`${GIT_SEARCH_URL}${searchQuery}`, {
      method: 'get',
      headers: new Headers({
        Accept: 'application/vnd.github.cloak-preview',
      }),
    })
      .then(response => response.json())
      .then((data) => {
        setContent(data);
        setIsLoading(false);
      });
    // setInterval(this.requestUsersPullRequests, 120000);
  }, []);

  function countPRsByUsers(items, user) {
    let count = 0;

    items.map((item) => {
      if (item.user.login === user) {
        return count++;
      }
      return null;
    });

    return count;
  }

  function insertUsersPullRequests(contentToRank) {
    return USERS_LIST.map(user => ({
      username: user,
      pullRequests: countPRsByUsers(contentToRank.items, user),
    }));
  }

  function rankedUsersByPullRequests(contentToRank) {
    const userData = insertUsersPullRequests(contentToRank);

    const rankedUsers = userData.sort((a, b) => b.pullRequests - a.pullRequests);

    return rankedUsers.map((rankedUser, index) => (
      <li key={index}>
        {rankedUser.username}
        {' '}
  -
        {' '}
        {rankedUser.pullRequests}
      </li>
    ));
  }

  const isUsersListEmpty = USERS_LIST.length === 0;

  return (
    <div className="scoreboard">
      {(!isUsersListEmpty && !isLoading)
          && (
          <div>
            <h1 className="scoreboard__title">PULL REQUEST SCOREBOARD</h1>
            <ul className="scoreboard__users-list">
              {rankedUsersByPullRequests(content)}
            </ul>
            <h2 className="scoreboard__total-score">
TOTAL
              {' '}
              {content.total_count}
            </h2>
          </div>
          )
        }
      {isUsersListEmpty
          && <h1>ADICIONE USUÁRIOS GITHUB NO ARQUIVO usersList.js</h1>
        }
    </div>
  );
}
