import { Link, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const links = (
    <>
      <li className="font-semibold text-xl hover:bg-blue-700 hover:rounded hover:text-white">
        <NavLink to="/">Home</NavLink>
      </li>
      {/* <li className="font-semibold text-xl hover:bg-blue-700 hover:rounded hover:text-white">
        <NavLink to="/statistics">Statistics</NavLink>
      </li> */}
      <li className="font-semibold text-xl hover:bg-blue-700 hover:rounded hover:text-white">
        <NavLink to="/applied-jobs">Applied Jobs</NavLink>
      </li>
      <li className="font-semibold text-xl hover:bg-blue-700 hover:rounded hover:text-white">
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </>
  );

  // const startApply = () => {
    // toast.success("Apply");
    // alert("Start Apply Button Clicked");
  // };

  return (
    <div className="fixed navbar bg-base-100 shadow-lg px-3 md:px-10 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="text-2xl text-blue-500 font-bold ">Find Job</Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 flex flex-row gap-3">{links}</ul>
      </div>
      <div className="navbar-end">
        <button
          // onClick={startApply}
          className="btn bg-blue-700 text-white font-bold border-2 border-blue-700 hover:bg-transparent hover:border-blue-700 hover:text-blue-700"
        >
          Start Apply
        </button>
      </div>
      <ToastContainer />
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </div>
  );
};

export default Navbar;
