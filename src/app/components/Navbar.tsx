import { Link } from "wasp/client/router";

export const Navbar = () =>  (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          {" "}
          ❓Answer Me Please❔
        </Link>
      </div>
    </div>
  );