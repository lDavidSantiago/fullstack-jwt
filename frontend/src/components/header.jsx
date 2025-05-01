import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white flex items-center justify-center px-6 py-4">
      <div className="flex items-center gap-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="h-8 w-8"
        />
        <h1 className="text-xl font-semibold">
          Frontend authenticated with JWT
        </h1>
      </div>
    </header>
  );
};

export default Header;
