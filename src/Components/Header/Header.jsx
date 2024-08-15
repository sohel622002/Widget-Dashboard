import React from "react";
import { Link } from "react-router-dom";
import { IoChevronDown, IoNotifications } from "react-icons/io5";
import SearchInput from "./SearchInput";

function Header({ setSearchTerm }) {
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
      <div className="flex items-center gap-2 sm:gap-3 justify-between sm:justify-normal overflow-hidden">
        <div>
          <SearchInput setSearchTerm={setSearchTerm} />
        </div>
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
