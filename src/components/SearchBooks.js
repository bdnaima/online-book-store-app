import { useState } from "react";

const SearchBooks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBookReults, setSearchBookResults] = useState([]);

  const ApiKey = process.env.REACT_APP_API_KEY;

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${ApiKey}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      setSearchBookResults(data.items || []);

      console.log(data.items);
    } catch (error) {
      console.log(error);
      setSearchBookResults([]);
    }
  };

  return (
    <div>
      <input
        placeholder="Search Books"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {searchBookReults.map((book) => (
          <ul key={book.id}>
            <li>{book.volumeInfo.title}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SearchBooks;
