import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchInput({ setSearchTerm }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchText);
  };

  const handleSearchInputChange = (e) => {
    if (e.target.value) {
      setSearchText(e.target.value);
    } else {
      setSearchTerm("");
      setSearchText("");
    }
  };

  return (
    <form
      className="p-1 px-2 rounded items-center gap-2 bg-slate-100 inline-flex"
      onSubmit={handleSearch}
    >
      <IoSearchSharp className="text-slate-800" />
      <input
        type="text"
        name="searchTerm"
        placeholder="search anything..."
        className="bg-transparent border-none outline-none w-full"
        value={searchText}
        onChange={(e) => handleSearchInputChange(e)}
      />
    </form>
  );
}
