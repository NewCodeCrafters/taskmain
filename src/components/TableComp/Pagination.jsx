import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-2">
      {/* Prev Button */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-2 py-1 rounded disabled:opacity-40 hover:bg-gray-100"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded border 
            ${
              currentPage === page
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white dark:bg-black dark:border-neutral-700 dark:text-white text-gray-700 hover:bg-gray-100 border-gray-300"
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-2 py-1 rounded disabled:opacity-40 hover:bg-gray-100"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
