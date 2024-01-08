"use client";
import { addRole } from "@/app/lib/actions";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
const RoleGrit = ({ permissionData }) => {
  const [toggleCheckboxes, setToggleCheckboxes] = useState(false); // State for toggle
  const [loading, setLoading] = useState(false); // Initialize loading state

  const formRef = useRef();

  console.log(permissionData);

  // const [checkboxes, setCheckboxes] = useState([
  //   {
  //     id: 3,
  //     name: "create",
  //     code: "create_grit_user",
  //     module: "Manage Roles",
  //     type: "grit",
  //     isChecked: false,
  //   },
  //   {
  //     id: 4,
  //     name: "edit",
  //     code: "edit_grit_user",
  //     module: "Manage Roles",
  //     type: "grit",
  //     isChecked: false,
  //   },
  //   {
  //     id: 5,
  //     name: "view",
  //     code: "view_grit_user",
  //     module: "Manage Roles",
  //     type: "grit",
  //     isChecked: false,
  //   },
  // ]);

  const [checkboxes, setCheckboxes] = useState(permissionData);

  const handleCheckboxChange = (id) => {
    setCheckboxes(
      checkboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, isChecked: !checkbox.isChecked }
          : checkbox
      )
    );
  };

  const handleToggleChange = () => {
    setToggleCheckboxes(!toggleCheckboxes); // Toggles the state of checkboxes
    setCheckboxes(
      checkboxes.map((checkbox) => ({
        ...checkbox,
        isChecked: !toggleCheckboxes,
      }))
    );
  };

  const handleSubmit = async (event) => {
    const checkedItems = checkboxes.filter((checkbox) => checkbox.isChecked);

    console.log(checkedItems); // Display in console

    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);

    const username = formData.get("username");
    const description = formData.get("description");

    setLoading(true); // Set loading to true while submitting

    try {
      const response = await addRole(checkedItems, username, description);
      if (response?.message === "role Added") {
        formRef.current.reset();
        toast.success("Role Added Successfully");
      } else if (response?.message === "role error") {
        toast.error("Role Added Failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false); // Set loading back to false after submission
    }
  };

  //form state
  function Submit() {
    return (
      <button
        type="submit"
        disabled={loading}
        className="btn btn-sm btn-neutral text-white h-[6vh] w-[30vh] rounded-xl "
      >
        {loading ? "Creating..." : "Create Role & Permission"}
      </button>
    );
  }

  return (
    <>
      <section className="bg-white w-full shadow-lg rounded-lg">
        <div className="p-3">
          <form onSubmit={handleSubmit} ref={formRef}>
            <div class="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                // className="shadow appearance-none border rounded w-full bg-white py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="description"
              >
                Description
              </label>
              <textarea
                placeholder="Description"
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
                What permission do you like to include in this role?{" "}
              </h1>
            </div>
            <div className="py-1"></div>

            <label className="flex items-center py-2 ">
              <input
                type="checkbox"
                checked={toggleCheckboxes}
                onChange={handleToggleChange}
                className="toggle toggle-md "
              />
              <p className="font-bold px-2 text-black ">Manage Roles</p>
            </label>

            <div>
              {checkboxes.map((checkbox) => (
                <div key={checkbox.id} className="flex py-1 ">
                  <input
                    className="checkbox bg-white "
                    type="checkbox"
                    id={`checkbox-${checkbox.id}`}
                    checked={checkbox.isChecked}
                    onChange={() => handleCheckboxChange(checkbox.id)}
                  />
                  <label
                    className="px-2 text-md text-black "
                    htmlFor={`checkbox-${checkbox.id}`}
                  >
                    {checkbox.name}
                  </label>
                </div>
              ))}
              <div className="py-1"></div>
              <Submit />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default RoleGrit;
