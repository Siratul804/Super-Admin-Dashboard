import PackageList from "@/app/ui/Gym/Package/EditPackage/EditPackage";
import { GetGymPackagePaginationData } from "@/app/lib/data";
import { GetRoleData } from "@/app/lib/data";
import { auth } from "@/app/auth";

// import { GetRolePermissionData } from "@/app/lib/data";

const page = async ({ searchParams }) => {
  const { user } = await auth();
  console.log(user);

  const page = searchParams?.page || 1;
  const name = searchParams?.name || "";
  const price = searchParams?.price || "";

  const { paginationPackage, countNumber } = await GetGymPackagePaginationData(
    page,
    name,
    price
  );

  const roleData = await GetRoleData();

  // console.log(roleData);

  // const permissionActiveData = await GetRolePermissionData(); // issue in here . Need to cache data or update value of role_id and transfer to backend

  // console.log(permissionActiveData);

  return (
    <>
      <PackageList
        PaginationData={paginationPackage}
        PaginationCount={countNumber}
        roleData={roleData}
        user={user}
        // permissionData={permissionActiveData}
      />
    </>
  );
};

export default page;
