"use client";

const Pagination = ({ links, onPageChange }) => {
  const handlePageClick = (link) => {
    if (!link.url) return;

    const url = new URL(link.url);
    const page = url.searchParams.get("page");
    if (page) {
      onPageChange(Number.parseInt(page));
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      {links.map((link, index) => {
        const isNumber = !isNaN(Number.parseInt(link.label));
        const isPrevious = link.label.includes("Previous");
        const isNext = link.label.includes("Next");

        if (isPrevious) {
          return (
            <button
              key={index}
              onClick={() => handlePageClick(link)}
              disabled={!link.url}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </button>
          );
        }

        if (isNext) {
          return (
            <button
              key={index}
              onClick={() => handlePageClick(link)}
              disabled={!link.url}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Next
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          );
        }

        if (isNumber) {
          return (
            <button
              key={index}
              onClick={() => handlePageClick(link)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                link.active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {link.label}
            </button>
          );
        }

        return null;
      })}
    </div>
  );
};

export default Pagination;
