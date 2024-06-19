import { Link } from "react-router-dom";

const Card = ()=>{
    return(
        <>
        <div className=" px-[20%] pt-12 sm:pt-24 font-semibold text-center text-6xl font-inter">
            <Link className="hover:underline" to={"/signup"} >Create Your Account</Link> 
            <div>  or  </div>
            <Link className="hover:underline" to={"/signin"} >Log In</Link>
        </div>
        <div className=" text-[#828282] sm:py-10 py-5 text-sm sm:text-normal  text-center font-inter">
               For effortless payments, anywhere, anytime.
        </div>
        </>
    )
}

export default Card;