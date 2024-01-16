"use client";
const UpdateRole = ({ id }) => {
  function Submit() {
    return (
      <button
        type="submit"
        className="bg-black pl-3 pr-3 pt-2 pb-2 w-[250px] text-sm rounded-md font-bold text-white "
      >
        Update Role & Permissions
      </button>
    );
  }
  return (
    <>
      {" "}
      <section className="bg-white w-full shadow-lg rounded-lg">
        <div className="p-3">
          <form onSubmit="">
            {id}
            <div class="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Update Role Name
              </label>
              <input
                // className="shadow appearance-none border rounded w-full bg-white py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                id="username"
                name="username"
                type="text"
                placeholder="Role Name"
                required
              />
            </div>
            <div class="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Update Role Status
              </label>
              <main>
                <select
                  name="status"
                  className=" h-[6vh] bg-[#FFFFFF] appearance-none border-[1px] border-[#8d94b0] rounded-md w-full py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                >
                  <option disabled selected>
                    Select Status
                  </option>
                  <option>Active</option>
                  <option>Disable</option>
                </select>
              </main>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Update Role Description
              </label>
              <textarea
                placeholder="Role Description"
                id="description"
                name="description"
                type="text"
                required
                // className="shadow appearance-none border rounded w-full bg-white py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                className=" input  h-[14vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
              ></textarea>
            </div>
            <div className="">
              <h1 className="text-xl  text-black ">
                What permission do you like to Edit in this role?{" "}
              </h1>
            </div>
            <div className="py-1"></div>

            <div className="py-2">
              <Submit />
            </div>
          </form>
        </div>
      </section>{" "}
    </>
  );
};

export default UpdateRole;
