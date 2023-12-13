"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const Pagination = ({ PaginationData, PaginationCount }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  console.log(PaginationCount);

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < 4;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <>
      <div className="flex justify-end py-1 ">
        <div className="join">
          {PaginationData.map((val) => (
            <h1>{val.name}</h1>
          ))}

          {/* ............. */}

          <button
            className="join-item btn btn-sm btn-outline"
            disabled={!hasPrev}
            onClick={() => handleChangePage("prev")}
          >
            Previous page
          </button>
          <button
            className="join-item btn btn-sm btn-outline"
            disabled={!hasNext}
            onClick={() => handleChangePage("next")}
          >
            Next
          </button>
          {/* ............. */}
        </div>
      </div>
    </>
  );
};

export default Pagination;
