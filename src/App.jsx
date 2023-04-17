import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [emailData, setEmailData] = useState({
    from: '',
    to: '',
    subject: '',
    body: '',
    password:'',
  });

  const api = axios.create({
    baseURL:'http://localhost:8000',
  });

  const handleChange = (event) => {
    setEmailData({
      ...emailData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await api.post('/send-email', emailData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>Plataforma Envio E-mail GMAIL</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="from">E-mail Padrão:</label>
          <input type="email" name="from" value={emailData.from} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="to">E-mail Envio:</label>
          <input type="email" name="to" value={emailData.to} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Senha E-mail:</label>
          <input type="password" name="password" value={emailData.password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="subject">Assunto:</label>
          <input type="text" name="subject" value={emailData.subject} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="body">Corpo E-mail:</label>
          <textarea name="body" value={emailData.body} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
