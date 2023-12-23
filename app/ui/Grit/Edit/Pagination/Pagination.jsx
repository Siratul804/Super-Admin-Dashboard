"use client";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const Pagination = ({ PaginationCount }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  console.log(PaginationCount);

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 10;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext =
    ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < PaginationCount;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <>
      <div className="flex justify-between py-1 p-3 ">
        <div className="text-black pt-3 pl-1 text-[12px] sm:text-sm ">
          Page {page}
        </div>
        {/* ................ */}
        <div className="flex justify-end py-1 ">
          <div className="text-black pt-2 text-[12px] sm:text-sm ">
            Total Users : {PaginationCount}
          </div>
          <div className="px-2"></div>
          <div className="text-black pt-2 text-[12px] sm:text-sm ">
            Row Per Page : {ITEM_PER_PAGE}
          </div>
          <div className="px-2"></div>
          <div className="flex">
            {/* ............. */}
            <button
              className=" bg-white rounded-full border-none shadow-none px-2 hover:bg-slate-100 btn btn-sm"
              disabled={!hasPrev}
              onClick={() => handleChangePage("prev")}
            >
              <FaChevronLeft size={15} />
            </button>
            <div className="px-1"></div>
            <button
              className=" bg-white rounded-full border-none shadow-none px-2 hover:bg-slate-100 btn btn-sm"
              disabled={!hasNext}
              onClick={() => handleChangePage("next")}
            >
              <FaChevronRight size={15} />
            </button>
            {/* ............. */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
