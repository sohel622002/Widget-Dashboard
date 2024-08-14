import React from "react";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";

function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="p-2 flex flex-col sm:flex-row sm:items-center gap-2 justify-between">
      <div className="text-sm font-medium">
        <Link to={"/"} className="text-slate-400">
          Home &gt;{" "}
        </Link>
        <Link to={"/"} className="text-blue-900 font-semibold">
          Dashboard2
        </Link>
      </div>
      <div className="flex items-center sm:gap-3 justify-between sm:justify-normal">
        <label className="p-1 px-2 rounded flex items-center gap-2 bg-slate-100">
          <IoSearchSharp className="text-slate-800" />
          <input
            type="text"
            placeholder="search anything..."
            className="bg-transparent border-none outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <span>
          <IoChevronDown />
        </span>
        <span>
          <IoNotifications />
        </span>
      </div>
    </header>
  );
}

export default Header;
