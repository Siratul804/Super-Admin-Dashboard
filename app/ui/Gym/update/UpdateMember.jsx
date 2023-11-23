import { updateMember } from "@/app/lib/actions";
import { GetMemberByIdToUpdate } from "@/app/lib/data";

const UpdateMember = async ({ id }) => {
  const member = await GetMemberByIdToUpdate(id);
  return (
    <>
      <h1 className="flex mt-5 sm:mt-10 items-center justify-center text-[35px] font-bold font-mono ">
        UPDATE-MEMBER
      </h1>
      <section className="flex justify-center items-center mt-5 sm:mt-4 ">
        <form action={updateMember}>
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
                defaultValue={member.name}
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
                defaultValue={member.email}
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
                defaultValue={member.number}
                required
                className="input input-bordered w-[350px] max-w-xs text-[black] bg-white "
              />
            </main>
            <main>
              <label className="label">
                <span className="text-[black]">Status </span>
              </label>
              <select
                name="status"
                defaultValue={member.status}
                className="select select-bordered  w-[350px] max-w-xs bg-white text-black "
              >
                <option>Active</option>
                <option>Disable</option>
              </select>
            </main>
          </div>

          <div className="flex justify-center sm:flex-row flex-col py-5 ">
            <input
              type="file"
              name="file"
              accept="image/png"
              className="file-input  file-input-bordered file-input-sm w-full bg-white "
            />
          </div>

          <div className="flex justify-between ">
            <label>
              <button
                className="btn btn-sm btn-neutral text-white w-[340px] sm:w-[650px]"
                type="submit"
              >
                Update Member
              </button>
            </label>
          </div>
        </form>
      </section>
    </>
  );
};

export default UpdateMember;
