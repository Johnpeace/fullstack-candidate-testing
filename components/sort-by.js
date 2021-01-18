import React, { memo } from "react";

const SortBy = memo(({ name, sort, onClick }) => {
  const displaySortMode = (mode) => {
    switch (mode) {
      case "":
        return <div />;

      case "desc":
        return (
          <div className="ml-1 w-2 h-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.85 451.85">
              <path d="M225.92 354.7c-8.1 0-16.2-3.09-22.37-9.26L9.27 151.16a31.64 31.64 0 1144.75-44.75l171.9 171.91 171.9-171.9a31.64 31.64 0 0144.75 44.74L248.3 345.45a31.55 31.55 0 01-22.37 9.26z" />
            </svg>
          </div>
        );

      case "asc":
        return (
          <div className="ml-1 w-2 h-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.85 451.85">
              <path d="M248.3 106.4l194.27 194.3a31.64 31.64 0 01-44.74 44.74l-171.9-171.91L54.01 345.44a31.65 31.65 0 01-44.75-44.75L203.55 106.4a31.54 31.54 0 0122.37-9.26c8.1 0 16.2 3.1 22.37 9.27z" />
            </svg>
          </div>
        );

      default:
        return <div />;
    }
  };

  return (
    <button
      onClick={onClick}
      className="flex mr-2 focus:outline-none items-center"
      aria-label="button"
    >
      <span>{name}</span>
      {displaySortMode(sort)}
    </button>
  );
});

export default SortBy;
