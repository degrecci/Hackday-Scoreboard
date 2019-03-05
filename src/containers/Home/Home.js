import React, { useState } from 'react';

import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';

import Scoreboard from '../Scoreboard/Scoreboard';
import './Home.css';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [date, setDate] = useState({});
  const [usersList, setUsersList] = useState([]);

  const submitUsersList = (e) => {
    e.preventDefault();
    setUsersList(users.split('\n'));
  };

  const handleUsersChange = (e) => {
    setUsers(e.target.value);
  };

  const handleDatePicker = (data) => {
    setDate(data);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      return setUsersList(users.split('\n'));
    }

    return null;
  };

  const isUsersListEmpty = usersList.length === 0;

  return (
    <div className="home">
      <h1 className="home__title">HACKDAY SCOREBOARD</h1>
      {isUsersListEmpty
        && (
        <form
          onSubmit={submitUsersList}
          className="home__form"
        >
          <h3 className="home__label">Selecione uma Data</h3>
          <DatePicker
            onChange={handleDatePicker}
          />

          <h3 className="home__label">Adicione usuários no campo abaixo:</h3>
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
        && <Scoreboard usersList={usersList} date={date} />
      }
    </div>
  );
}
