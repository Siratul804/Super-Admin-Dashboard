"use client";
import { useEffect, useState } from "react";

import { updateRole } from "@/app/lib/actions";

import Link from "next/link";

import toast from "react-hot-toast";
const UpdateRole = ({ roleData, permissionData, permissionActiveData }) => {
  const [checkboxes, setCheckboxes] = useState(permissionData);
  const [toggleCheckboxes, setToggleCheckboxes] = useState(false);

  const [loading, setLoading] = useState(false); // Initialize loading state

  const [toggleCheckboxesManageRole, setToggleCheckboxesManageRole] =
    useState(false); // State for toggle
  const [toggleCheckboxesManageGuest, setToggleCheckboxesManageGuest] =
    useState(false); // State for toggle

  // Fetch ids from your separate table (assuming it's an array of ids)
  const storedIds = permissionActiveData.map((item) => item.permission_id);

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
    setToggleCheckboxes(!toggleCheckboxes);
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
        if (checkbox.module === "Manage User") {
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
        if (checkbox.module === "Manage Role") {
          return {
            ...checkbox,
            isChecked: !toggleCheckboxesManageGuest,
          };
        }
        return checkbox;
      })
    );
  };

  useEffect(() => {
    setCheckboxes(
      checkboxes.map((checkbox) => ({
        ...checkbox,
        isChecked: storedIds.includes(checkbox.id),
      }))
    );
    console.log(roleData, storedIds);
  }, [roleData]);

  const handleSubmit = async (event) => {
    const checkedItems = checkboxes.filter((checkbox) => checkbox.isChecked);

    console.log(checkedItems); // Display in console

    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);

    const username = formData.get("username");
    const description = formData.get("description");
    const status = formData.get("status");
    const id = formData.get("id");

    setLoading(true); // Set loading to true while submitting

    try {
      const response = await updateRole(
        checkedItems,
        username,
        description,
        status,
        id
      );
      if (response?.message === "Role updated") {
        toast.success("Role Updated Successfully", {
          style: {
            background: "#008000",
            color: "#fff",
          },
        });
      } else if (response?.message === "Role error") {
        toast.error("Role Updated Failed", {
          style: {
            background: "#FF0000",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false); // Set loading back to false after submission
    }
  };

  function Submit() {
    return (
      <button
        type="submit"
        disabled={loading}
        className="bg-black pl-3 pr-3 pt-2 pb-2 w-[250px] sm:w-[250px] text-sm rounded-md font-bold text-white "
      >
        {loading ? "Updaing..." : "Update Role & Permissions"}
      </button>
    );
  }
  return (
    <>
      <section className="bg-white w-full shadow-lg rounded-lg">
        <div className="p-3">
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="id" value={roleData.id} />
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
                defaultValue={roleData.name}
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
                  defaultValue={roleData.status}
                  className=" h-[6vh] bg-[#FFFFFF] appearance-none border-[1px] border-[#8d94b0] rounded-md w-full py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                >
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
                defaultValue={roleData.description}
                name="description"
                type="text"
                required
                // className="shadow appearance-none border rounded w-full bg-white py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                className=" input  h-[14vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
              ></textarea>
            </div>
            <div className="">
              <h1 className="text-xl  text-black ">
                What permission do you like to Edit in this role?
              </h1>
            </div>
            <div className="py-1"></div>
            <label className="flex items-center py-2 " htmlFor="checkbox">
              <input
                type="checkbox"
                checked={toggleCheckboxes}
                onChange={handleToggleChange}
                className="toggle toggle-md toggle-success "
              />
              <p className=" px-2 text-black "> Select All Permissions</p>
              {/* <span className="text-red-500 font-bold ">
                {permissionActiveData.permission_id === permissionData.id ? (
                  <>
                    <p>It's On</p>
                  </>
                ) : null}
              </span> */}
            </label>

            <div className="flex justify-between">
              <div className="manage_role">
                <label className="flex items-center py-2 " htmlFor="checkbox">
                  <input
                    type="checkbox"
                    checked={toggleCheckboxesManageRole}
                    onChange={handleToggleChangeManageRoles}
                    className="toggle toggle-md toggle-primary "
                  />
                  <p className=" px-2 text-black font-bold "> Manage User</p>
                </label>

                {checkboxes.map((checkbox) => (
                  <div key={checkbox.id}>
                    {checkbox.module === "Manage User" ? (
                      <div className="flex py-1 ">
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
                  </div>
                ))}
              </div>
              <div className="py-1"></div>
              <div className="manage_guest">
                <label className="flex items-center py-2 " htmlFor="checkbox">
                  <input
                    type="checkbox"
                    checked={toggleCheckboxesManageGuest}
                    onChange={handleToggleChangeManageGuest}
                    className="toggle toggle-md toggle-primary "
                  />
                  <p className=" px-2 text-black font-bold "> Manage Role</p>
                </label>
                <div className="py-1"></div>

                {checkboxes.map((checkbox) => (
                  <div key={checkbox.id}>
                    {checkbox.module === "Manage Role" ? (
                      <div className="flex py-1 ">
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
                  </div>
                ))}
              </div>

              <div className="py-1"></div>
            </div>

            <div className="py-4 flex ">
              <Submit />
              <Link
                href="/dashboard/grit/roleList"
                className="bg-black rounded-lg text-white text-sm ml-3 "
              >
                <button className="bg-black pl-3 pr-3 pt-2 pb-2 w-[100px] sm:w-[250px] text-sm rounded-md font-bold text-white">
                  Close
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateRole;
