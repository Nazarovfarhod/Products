import { Link, Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <div className="">
      <div className="navbar bg-base-100 mb-16 container ml-auto mr-auto px-24 shadow-xl">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl italic ">
            <span className="text-4xl font-serif font-bold text-info italic underline">
              FN
            </span>{" "}
            Products
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="text-xl">
              <Link to="/">home</Link>
            </li>
            <li>
              <details>
                <summary className="text-xl">Pages</summary>
                <ul className="bg-base-100 rounded-t-none">
                  <li className="text-xl">
                    <a>About</a>
                  </li>
                  <li className="text-xl">
                    <a>Contact</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
