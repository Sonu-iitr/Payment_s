import logo from "./logo.svg"
import {Link} from "react-router-dom"

const Header = ({title, caption, buttontext , to})=>{
    return (
        <>
        <img className="w-45 border-2-black" src={logo} alt="logo" />
        <div className="text-black font-poppins text-4xl font-medium" >
            {title}
        </div>
        <div className="font-normal text-base text-[#111111] pb-10" >
            {caption}
            <Link className="underline" to = {to} >{buttontext}</Link>
            </div>
        </>
    )
}

export default Header;