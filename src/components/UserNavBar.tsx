import { signOut, useSession } from "next-auth/react";
import React from "react";

function UserNavBar() {
  const { data: session, status } = useSession();
  if (status === "loading")
    return (
      <div
        className="radial-progress"
        style={{ "--size": "3rem", "--thickness": "2px" }}
      >
        Loading Auth
      </div>
    );
  if (status === "unauthenticated") return <div>Not Authenticated</div>;

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">daisyUI</a>
      </div>
      <div className="flex-none">
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <img src={session?.user.image} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a onClick={() => signOut({ callbackUrl: "/" })}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserNavBar;
