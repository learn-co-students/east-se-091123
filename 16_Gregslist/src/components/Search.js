import { useState } from "react";

function Search({ updateSearch }) {
  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    updateSearch(searchValue);
    e.target.reset();
  }

  const updateForm = (e) => setSearchValue(e.target.value);

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={updateForm}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
