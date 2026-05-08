import React from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here, e.g., navigate to search results page
    console.log("Searching for:", searchTerm);
    setIsOpen(false); // Close search bar after search
  };
  return (
    <>
      <div
        className={`transition-all duration-300 ${
          isOpen
            ? "fixed top-0 left-0 w-full bg-white shadow-md z-50 py-6 px-4"
            : "relative"
        }`}
      >
        {isOpen ? (
          <form
            onSubmit={handleSearch}
            className="flex items-center justify-center max-w-3xl mx-auto relative"
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-100 border border-gray-200 rounded-full py-3 pl-5 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-rabbit-red"
              />

              {/* Search Icon */}
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition"
              >
                <HiMagnifyingGlass className="w-5 h-5" />
              </button>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={handleSearchToggle}
              className="ml-4 text-gray-500 hover:text-black transition"
            >
              <HiMiniXMark className="w-7 h-7" />
            </button>
          </form>
        ) : (
          <button
            onClick={handleSearchToggle}
            className="text-gray-700 hover:text-black transition"
          >
            <HiMagnifyingGlass className="w-6 h-6" />
          </button>
        )}
      </div>
    </>
  );
}
