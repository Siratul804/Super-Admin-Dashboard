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
        <div className="bg-white shadow-sm p-5 rounded-xl sm:h-[18vh] h-[30vh] sm:w-[150vh] w-[100vh] flex justify-evenly flex-wrap">
          <div>
            <label>Name </label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Name "
              name="name"
              onChange={handleSearchName}
              className="input py input-sm  bg-white text-black border-black focus:outline-black focus:border-black w-[250px] "
            />
          </div>
          <div>
            <label>Number </label>
            <br />
            <input
              type="number"
              placeholder="Enter Your Number "
              name="number"
              onChange={handleSearchNumber}
              className="input py input-sm  bg-white text-black border-black focus:outline-black focus:border-black w-[250px] "
            />
          </div>
          <div>
            <label>Status </label>
            <br />
            <select
              name="status"
              onChange={handleSearchStatus}
              className="select bg-white text-black border-black focus:outline-black focus:border-black select-sm w-[250px] "
            >
              <option>Active</option>
              <option>Disable</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
