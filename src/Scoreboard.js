import React, { useState, useEffect } from 'react';

import { GIT_SEARCH_URL } from './constants/gitSearchUrl';
import searchQuery from './utils/searchQuery';

import './Scoreboard.css';

export default function Scoreboard(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState({});

  const fetchPullRequests = () => fetch(`${GIT_SEARCH_URL}${searchQuery(props.usersList)}`, {
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

  useEffect(() => {
    fetchPullRequests();
    setInterval(fetchPullRequests, 120000);
  }, []);

  const countPRsByUsers = (items, user) => {
    let count = 0;

    items.map((item) => {
      if (item.user.login === user) {
        return count++;
      }
      return null;
    });

    return count;
  };

  const insertUsersPullRequests = contentToRank => props.usersList.map(user => ({
    username: user,
    pullRequests: countPRsByUsers(contentToRank.items, user),
  }));

  const rankedUsersByPullRequests = (contentToRank) => {
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
  };

  return (
    <div className="scoreboard">
      {!isLoading
        && (
        <div>
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
    </div>
  );
}
