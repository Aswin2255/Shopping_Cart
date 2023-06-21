import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const count = useSelector((state)=>state.cart.cartcount)
  return (
    <div className="sticky top-0 z-20">
      <nav className="bg-white border  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to='/' className="flex items-center">
            <img
              src='logo.png'
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
          </Link>
          <div className="middle hidden md:block ">
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-500">
              
              </div>

             
            </div>
          </div>

          <div>
            <span class="absolute top-0 text-red-500 text-center text-xl font-bold ">
              {count && count}
            </span>
            <div className="flex hover:underline hover:text-blue-500 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:underline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <Link to='/cart'>
                
                <span className="font-bold m-1">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
