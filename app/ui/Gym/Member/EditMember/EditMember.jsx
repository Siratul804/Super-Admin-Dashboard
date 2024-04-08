import React from "react";
import SearchBox from "../SearchUser/SearchBox";
import AddMember from "../AddMember/AddMember";
import EditTable from "../EditMember/EditTable";
import Pagination from "../Pagination/Pagination";

const EditMember = ({ user, packgaeData, MemberData, PaginationCount }) => {
  return (
    <>
      <div className="">
        <div className="py-2"></div>
        <SearchBox />
        <div className="py-5"></div>
        <section className="bg-white w-full shadow-lg rounded-lg">
          <div className="">
            <div className="p-3 flex justify-between  ">
              <h1 className="text-lg font-bold text-black ">Member List</h1>
              {/* {permission.includes(3) && <AddUser roleData={roleData} />} */}
              <AddMember user={user} packgaeData={packgaeData} />
            </div>
          </div>

          <>
            <div className="overflow-x-auto h-[52vh]">
              <EditTable
                // permission={permission}
                MemberData={MemberData}
                user={user}
                packgaeData={packgaeData}
              />
            </div>
          </>

          <Pagination PaginationCount={PaginationCount} />
        </section>
      </div>
    </>
  );
};

export default EditMember;
