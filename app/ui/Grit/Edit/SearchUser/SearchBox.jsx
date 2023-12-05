"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";
const SearchBox = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearchName = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("name", e.target.value);

    replace(`${pathname}?${params}`);
  }, 300);

  const handleSearchNumber = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("number", e.target.value);

    replace(`${pathname}?${params}`);
  }, 300);

  const handleSearchStatus = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("status", e.target.value);

    replace(`${pathname}?${params}`);
  }, 300);
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white w-full shadow-lg p-4 rounded-xl flex justify-between flex-wrap">
          <div>
            <label className="text-sm">Name </label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Name "
              name="name"
              onChange={handleSearchName}
              className="input  input-sm  bg-white text-black border-black focus:outline-black focus:border-black w-[34vh]  "
            />
          </div>
          <div>
            <label className="text-sm">Number </label>
            <br />
            <input
              type="number"
              placeholder="Enter Your Number "
              name="number"
              onChange={handleSearchNumber}
              className="input input-sm  bg-white text-black border-black focus:outline-black focus:border-black w-[34vh]  "
            />
          </div>
          <div>
            <label className="text-sm">Status </label>
            <br />
            <select
              name="status"
              onChange={handleSearchStatus}
              className="select bg-white text-black border-black focus:outline-black focus:border-black select-sm w-[34vh]  "
            >
              <option disabled selected>
                Select
              </option>
              <option>Active</option>
              <option>Disable</option>
            </select>
          </div>
          <div>
            <br />
            <button className="btn btn-neutral btn-sm text-white w-[34vh]  ">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
