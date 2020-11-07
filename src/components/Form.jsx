import React, { useState } from 'react';
import '../../src/assets/css/style.css';

const Form = (props) => {
  // This state set the input value state
  const [inputVar, setInputVar] = useState({
    id: null,
    author: '',
    bookName: '',
    isbn: '',
  });

  // This is onChange handler for the input fields
  const handleChange = (e) => {
    setInputVar({
      ...inputVar,
      id: Math.floor(Math.random(50) * 1000), // setting of id
      [e.target.name]: e.target.value,
    });
  };

  //This is onSubmit handler it update books state in app.js then set input to empty
  const handleSubmit = (e) => {
    e.preventDefault();

    props.setBook([...props.books, inputVar]);

    setInputVar({
      id: null,
      author: '',
      bookName: '',
      isbn: '',
    });
  };

  return (
    <div className='w-3/4'>
      <form onSubmit={handleSubmit}>
        <div className='mb-2 flex flex-col'>
          <label className='mb-1' htmlFor='author'>
            Author
          </label>
          <input
            onChange={handleChange}
            value={inputVar.author}
            className='border border-gray-600 rounded-md p-2'
            type='text'
            name='author'
            id=''
          />
        </div>
        <div className='mb-2 flex flex-col'>
          <label className='mb-1' htmlFor='bookName'>
            Book Name
          </label>
          <input
            onChange={handleChange}
            value={inputVar.bookName}
            className='border border-gray-600 rounded-md p-2'
            type='text'
            name='bookName'
            id=''
          />
        </div>
        <div className='mb-2 flex flex-col'>
          <label className='mb-1' htmlFor='isbn'>
            ISBN
          </label>
          <input
            onChange={handleChange}
            value={inputVar.isbn}
            className='border border-gray-600 rounded-md p-2'
            type='text'
            name='isbn'
            id=''
          />
        </div>
        <div className='mb-2'>
          <button className='border bg-blue-600 rounded-md p-3' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
