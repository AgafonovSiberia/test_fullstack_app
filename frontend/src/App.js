import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://0.0.0.0:9090/table"
    );

    setBooks(response.status);
    console.log(books);
  };

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="books">
          {books && books.map((book, index) => {
            return (
              <div className="book" key={index}>
                <h2>{book.index}</h2>

                <div className="details">
                  <p>{book.prices_in_dollars} pages</p>
                  <p>🏘{book.prices_in_dollars}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
