import { updateUser } from "@/app/lib/actions";
import { GetUserByIdToUpdate } from "@/app/lib/data";
import UpdatePass from "./UpdatePass";
const UpdateUser = async ({ id }) => {
  const user = await GetUserByIdToUpdate(id);

  return (
    <>
      <h1 className="flex mt-5 sm:mt-10 items-center justify-center text-[35px] font-bold font-mono ">
        UPDATE-ACCOUNT
      </h1>
      <section className="flex justify-center items-center mt-5 sm:mt-4 ">
        <form action={updateUser}>
          <div className="flex justify-evenly sm:flex-row flex-col  ">
            <input type="hidden" name="id" value={id} />
            <main className="pr-1">
              <label className="label">
                <span className="text-[black]"> Name </span>
              </label>
              <input
                type="ext"
                placeholder="name"
                name="name"
                defaultValue={user.name}
                required
                className="input input-bordered w-[350px] max-w-xs text-[black] bg-white "
              />
            </main>
            <main className="pl-1">
              <label className="label">
                <span className="text-[black]"> Email </span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                defaultValue={user.email}
                required
                className="input input-bordered w-[350px] max-w-xs text-[black] bg-white "
              />
            </main>
          </div>

          <div className="flex justify-evenly sm:flex-row flex-col  ">
            <main className="pb-1">
              <label className="label">
                <span className="text-[black]">Mobaile Number </span>
              </label>
              <input
                type="number"
                placeholder="Enter Your Number"
                name="number"
                defaultValue={user.number}
                required
                className="input input-bordered w-[350px] max-w-xs text-[black] bg-white "
              />
            </main>
            <main className="pb-1">
              <label className="label">
                <span className="text-[black]">Change Password</span>
              </label>
              <input
                type="password"
                placeholder="**********"
                value={user.password}
                className="input input-bordered w-[350px] max-w-xs text-[black] bg-white "
              />
            </main>
          </div>

          <div className="flex justify-between sm:flex-row flex-col  ">
            <main>
              <label className="label">
                <span className="text-[black]">Type</span>
              </label>
              <select
                name="role"
                defaultValue={user.role}
                className="select select-bordered w-[200px] max-w-xs bg-white text-black "
              >
                <option value="grit">grit</option>
                <option value="gym">gym</option>
              </select>
            </main>

            <main>
              <label className="label">
                <span className="text-[black]">Status </span>
              </label>
              <select
                name="status"
                defaultValue={user.status}
                className="select select-bordered w-[200px] max-w-xs bg-white text-black "
              >
                <option>Active</option>
                <option>Disable</option>
              </select>
            </main>
          </div>
          <br />
          <div className="flex justify-between ">
            <label>
              <button
                className="btn btn-sm btn-neutral text-white w-[340px] sm:w-[650px]"
                type="submit"
              >
                Create Account
              </button>
            </label>
          </div>
        </form>
      </section>

      <UpdatePass />
    </>
  );
};

export default UpdateUser;
