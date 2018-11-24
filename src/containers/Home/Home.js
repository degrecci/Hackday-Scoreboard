import React, { useState } from 'react';

import Scoreboard from '../Scoreboard/Scoreboard';
import './Home.css';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [usersList, setUsersList] = useState([]);

  const submitUsersList = (e) => {
    e.preventDefault();
    setUsersList(users.split(','));
  };

  const handleUsersChange = (e) => {
    setUsers(e.target.value);
  };

  const isUsersListEmpty = usersList.length === 0;

  return (
    <div>
      <h1 className="home__title">HACKDAY SCOREBOARD</h1>
      {isUsersListEmpty
        && (
        <form onSubmit={submitUsersList}>
          <textarea name="users" onChange={handleUsersChange} />
          <button type="submit">Salvar</button>
        </form>
        )
      }
      {!isUsersListEmpty
        && <Scoreboard usersList={usersList} />
      }
    </div>
  );
}
