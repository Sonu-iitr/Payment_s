import Image from "./Image.png"

const Heading = ()=>{
    return (
        <div className="">
            <div className="flex px-[20%] pt-12 sm:pt-24 font-semibold text-center text-6xl font-inter" >
                Seamless payments at your fingertips.
            </div>
            <div className=" text-[#828282] sm:py-10 py-5 text-sm sm:text-normal  text-center font-inter">
                Effortlessly manage your payments, anywhere, anytime.
            </div>
            <img className="mx-auto my-10" src={Image} alt="" />
        </div>
    )
}

export default Heading;