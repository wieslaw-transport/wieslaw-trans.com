import * as React from 'react';
import './form.scss';

export default function Form() {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const onSubmit = event => {
    event.preventDefault();

    fetch('http://localhost:8888/.netlify/functions/test', {
      method: 'POST',
      body: JSON.stringify({
        fullName,
        email,
        message,
      }),
    });
  };

  return (
    <form className="form" method="POST" onSubmit={onSubmit}>
      <div className="items-center grid gap-4 md:gap-8 md:grid-flow-col">
        <div>
          <label htmlFor="fullName">Imię i nazwisko</label>

          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={e => setFullName(e.currentTarget.value)}
          />
        </div>

        <div>
          <label htmlFor="email">E-mail</label>

          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          />
        </div>
      </div>

      <div className="w-full mt-4">
        <label htmlFor="message">Wiadomość</label>

        <textarea
          id="message"
          value={message}
          onChange={e => setMessage(e.currentTarget.value)}
        ></textarea>
      </div>

      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className={`btn-filled bg-primary-600 hover:bg-primary-700`}
        >
          Wyślij wiadomość
        </button>
      </div>
    </form>
  );
}
