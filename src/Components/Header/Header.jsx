import React from "react";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";

function Header() {
  return (
    <header className="p-2 flex items-center justify-between">
      <div>
        <Link to={"/"}>Home</Link> &gt; <Link to={"/"}>Dashboard2</Link>
      </div>
      <div className="flex items-center gap-3">
        <label className="p-1 px-2 rounded flex items-center gap-2 bg-slate-100">
          <IoSearchSharp className="text-slate-800"/>
          <input
            type="text"
            placeholder="search anything..."
            className="bg-transparent border-none"
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
