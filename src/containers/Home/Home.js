import React, { useState } from 'react';

import Scoreboard from '../Scoreboard/Scoreboard';
import './Home.css';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [usersList, setUsersList] = useState([]);

  const submitUsersList = (e) => {
    e.preventDefault();
    setUsersList(users.split('\n'));
  };

  const handleUsersChange = (e) => {
    setUsers(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      return setUsersList(users.split('\n'));
    }

    return null;
  };

  const isUsersListEmpty = usersList.length === 0;

  return (
    <div>
      <h1 className="home__title">HACKDAY SCOREBOARD</h1>
      {isUsersListEmpty
        && (
        <form
          onSubmit={submitUsersList}
          className="home__form"
        >
          <h3>Adicione usuários no campo abaixo:</h3>
          <textarea
            className="home__user-list"
            name="users"
            onChange={handleUsersChange}
            onKeyPress={handleKeyPress}
          />
          <button
            type="submit"
            className="home__save-button"
          >
            Salvar
          </button>
        </form>
        )
      }
      {!isUsersListEmpty
        && <Scoreboard usersList={usersList} />
      }
    </div>
  );
}
