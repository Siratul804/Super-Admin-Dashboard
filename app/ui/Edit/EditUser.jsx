import { GetUserData } from "@/app/lib/data";
const EditUser = async () => {
  const data = await GetUserData();
  return (
    <>
      {data.map((val) => (
        <>
          <div className="flex flex-col p-5 " key={val.id}>
            <h1>{val.name}</h1>
            <h2>{val.email}</h2>
            <h3>{val.number}</h3>
            <h4>{val.role}</h4>
            <h5>{val.status}</h5>
            <h6>{val.id}</h6>
          </div>
        </>
      ))}
    </>
  );
};

export default EditUser;
