import React, { useState, useRef } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [nat, setNat] = useState('uz');
  const [desc, setDesc] = useState('');
  const [users, setUsers] = useState([]);

  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const descRef = useRef(null);

  function handleChangeName(event) {
    setUserName(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangeNat(event) {
    setNat(event.target.value);
  }

  function handleChangeDesc(event) {
    setDesc(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!userName) {
      alert("Iltimos, username maydonini to'ldiring!");
      userNameRef.current.focus();
      return;
    }
    if (!email) {
      alert("Iltimos, email maydonini to'ldiring!");
      emailRef.current.focus();
      return;
    }
    if (!desc) {
      alert("Iltimos, izoh maydonini to'ldiring!");
      descRef.current.focus();
      return;
    }

    const userForm = {
      userName: userName,
      email: email,
      nat: nat,
      desc: desc,
      id: Date.now(),
    };

    setUsers((copied) => [...copied, userForm]);

    setUserName('');
    setEmail('');
    setNat('uz');
    setDesc('');
  }

  return (
    <div className='user'>
      <form onSubmit={handleSubmit}>
        <input ref={userNameRef}
          onChange={handleChangeName}
          value={userName}
          type="text"
          placeholder="username..." />
        <input
          ref={emailRef}
          onChange={handleChangeEmail}
          value={email}
          type="email"
          placeholder="email..."
        />
        <select onChange={handleChangeNat} value={nat}>
          <option value="uz">O'zbek</option>
          <option value="rus">Rus</option>
          <option value="eng">Ingliz</option>
        </select>
        <textarea
          ref={descRef}
          onChange={handleChangeDesc}
          value={desc}
          placeholder="enter description..."
          style={{ resize: 'none' }}
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      <div>
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
      
    </div>
  );
}

export default App;
