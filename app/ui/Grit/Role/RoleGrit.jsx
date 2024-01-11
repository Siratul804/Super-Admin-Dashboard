"use client";
import { addRole } from "@/app/lib/actions";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
const RoleGrit = ({ permissionData }) => {
  const [toggleCheckboxes, setToggleCheckboxes] = useState(false); // State for toggle
  const [loading, setLoading] = useState(false); // Initialize loading state

  const [toggleCheckboxesManageRole, setToggleCheckboxesManageRole] =
    useState(false); // State for toggle
  const [toggleCheckboxesManageGuest, setToggleCheckboxesManageGuest] =
    useState(false); // State for toggle

  const formRef = useRef();

  console.log(permissionData);

  const [checkboxes, setCheckboxes] = useState(permissionData);

  //checkbox_chnage_input
  const handleCheckboxChange = (id) => {
    setCheckboxes(
      checkboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, isChecked: !checkbox.isChecked }
          : checkbox
      )
    );
  };

  //toggles_chnage_toggle
  const handleToggleChange = () => {
    setToggleCheckboxes(!toggleCheckboxes); // Toggles the state of checkboxes
    setToggleCheckboxesManageRole(!toggleCheckboxesManageRole);
    setToggleCheckboxesManageGuest(!toggleCheckboxesManageGuest);

    setCheckboxes(
      checkboxes.map((checkbox) => ({
        ...checkbox,
        isChecked: !toggleCheckboxes,
      }))
    );
  };
  const handleToggleChangeManageRoles = () => {
    setToggleCheckboxesManageRole(!toggleCheckboxesManageRole);

    setCheckboxes(
      checkboxes.map((checkbox) => {
        if (checkbox.module === "Manage Roles") {
          return {
            ...checkbox,
            isChecked: !toggleCheckboxesManageRole,
          };
        }
        return checkbox;
      })
    );
  };
  const handleToggleChangeManageGuest = () => {
    setToggleCheckboxesManageGuest(!toggleCheckboxesManageGuest);

    setCheckboxes(
      checkboxes.map((checkbox) => {
        if (checkbox.module === "Manage Guests") {
          return {
            ...checkbox,
            isChecked: !toggleCheckboxesManageGuest,
          };
        }
        return checkbox;
      })
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
        className="btn btn-sm btn-neutral text-white h-[4vh] w-[30vh] rounded-xl "
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
                className="toggle toggle-md toggle-success "
              />
              <p className=" px-2 text-black "> Select All Permissions</p>
            </label>
            <div className="flex justify-between">
              <div className="manage_role">
                <label className="flex items-center py-2 ">
                  <input
                    type="checkbox"
                    checked={toggleCheckboxesManageRole}
                    onChange={handleToggleChangeManageRoles}
                    className="toggle toggle-md toggle-primary "
                  />
                  <p className=" px-2 text-black font-bold "> Manage Roles</p>
                </label>

                {checkboxes.map((checkbox) => (
                  <>
                    {checkbox.module === "Manage Roles" ? (
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
                    ) : null}
                  </>
                ))}
              </div>
              <div className="py-1"></div>
              <div className="manage_guest">
                <label className="flex items-center py-2 ">
                  <input
                    type="checkbox"
                    checked={toggleCheckboxesManageGuest}
                    onChange={handleToggleChangeManageGuest}
                    className="toggle toggle-md toggle-primary "
                  />
                  <p className=" px-2 text-black font-bold "> Manage Guest</p>
                </label>
                <div className="py-1"></div>
                {checkboxes.map((checkbox) => (
                  <>
                    {checkbox.module === "Manage Guests" ? (
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
                    ) : null}
                  </>
                ))}
              </div>

              <div className="py-1"></div>
            </div>
            <Submit />
          </form>
        </div>
      </section>
    </>
  );
};

export default RoleGrit;
