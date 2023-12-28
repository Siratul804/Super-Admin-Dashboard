import SearchDataTable from "./SearchDataTable";

const EditUser = async ({ SearchData, PaginationCount, PaginationData }) => {
  return (
    <>
      <div className="">
        <div className="py-2"></div>
        <SearchDataTable
          searchDeal={SearchData}
          PaginationCount={PaginationCount}
          PaginationData={PaginationData}
        />
      </div>
    </>
  );
};

export default EditUser;
