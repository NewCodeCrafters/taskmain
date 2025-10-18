import React from "react";
import Pagination from "./Pagination";
import Dropdown from "../OptionDropdown";

const Interactions = ({
  page,
  itemsPerPage,
  data,
  rowLength,
  setItemsPerPage,
  setPage,
}) => {
  return (
    <div className="flex dark:text-white   items-center justify-between mt-3 w-[23rem] md:w-[50rem]">
      <p>{`Page ${page} of ${Math.ceil(data.length / itemsPerPage)}`}</p>

      {/* Page Control */}
      <Pagination
        totalPages={Math.ceil(data.length / itemsPerPage)}
        currentPage={page}
        onPageChange={setPage}
      />

      {/* Number of Pages Control */}
      <Dropdown
        items={rowLength}
        className={"md:w-32 w-16"}
        onChange={setItemsPerPage}
        perPage={itemsPerPage}
      />
    </div>
  );
};

export default Interactions;
