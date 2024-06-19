import logo from "./logo.svg"
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <div className="w-full font-inter shadow-md sm:shadow-sm h-24 flex justify-between items-center px-6">
            <div className="flex items-center">
                <img className=" hidden sm:block w-12 h-12 mr-2" src={logo} alt="Logo" />
                <p className=" text-md sm:text-lg font-semibold font-inter">Payments App</p>
            </div>
        <div className="flex grid-col-3">
            <button className="px-1.5 md:px-3 py-1 hover:underline ">My Account</button>
            <button className="px-1.5 md:px-3 py-1 hover:underline">About Us</button>
            <Link className="px-1.5 md:px-3 py-1 rounded-md bg-black text-white hover:underline" to={"/signin"}>Log In</Link>
        </div>
    </div>
    )
}

export default Navbar;