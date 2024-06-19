import Insta from "./Insta.svg"
import Youtube from "./Youtube.svg"
import Linkedin from "./Linkedin.svg"
import Fb from "./Fb.svg"

const Footer = ()=>{
    return(
        <div className="h-48 w-[90%] mx-auto border-t-2 grid grid-cols-2 mt-32 ">
            <div className="flex flex-col justify-around">
                <div className="font-medium font-inter text-xl">Payments App</div>
                <div className="font-inter  font-medium">
                Contact us:
                <div className="flex grid grid-cols-12">
                    <img src={Fb} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Youtube} alt="" />
                    <img src={Insta} alt="" />
                </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Footer;