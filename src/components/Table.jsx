import React from 'react';
import '../../src/assets/css/style.css';

const Table = (props) => {
  const removeBook = (id) => {
    console.log(id);
    let newBook = props.books.filter((book) => book.id !== id); // remove single book from the list

    props.setBook(newBook);
  };

  return (
    <table className='border-collapse border-2 border-gray-600'>
      <thead>
        <tr>
          <th className='border border-yellow-600 px-8 py-4'>Author</th>
          <th className='px-8 border border-yellow-600 py-4'>Book Name</th>
          <th className='border border-yellow-600 px-8 py-4'>ISBN</th>
          <th className='border border-yellow-600 px-8 py-4'>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.books.map((book) => {
          return (
            <tr key={book.id}>
              <td className='border border-yellow-600 px-8 py-3 text-center'>
                {book.author}
              </td>
              <td className='border border-yellow-600 px-8 py-3 text-center'>
                {book.bookName}
              </td>
              <td className='border border-yellow-600 px-8 py-3 text-center'>
                {book.isbn}
              </td>
              <td className='border border-yellow-600 px-8 py-3 text-center'>
                <button
                  className='border bg-red-600 rounded-md p-3'
                  onClick={() => removeBook(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
