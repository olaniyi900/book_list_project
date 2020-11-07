import React, { useState } from 'react';
import './App.css';
import './assets/css/style.css';
import Form from './components/Form';
import Heading from './components/Heading';
import Table from './components/Table';

function App() {
  const [books, setBook] = useState([
    { id: 1, author: 'John Doe', bookName: 'start war', isbn: '2345' },
    { id: 2, author: 'John kole', bookName: 'start war', isbn: '2685' },
    { id: 3, author: 'Sandra Doe', bookName: 'start move', isbn: '1345' },
    { id: 4, author: 'muse Doe', bookName: 'start war', isbn: '2345' },
  ]);

  return (
    <div className='App mt-5 flex justify-center mb-8'>
      <div className='w-10/12'>
        <Heading />
        <Form books={books} setBook={setBook} />
        <Table books={books} setBook={setBook} />
      </div>
    </div>
  );
}

export default App;
