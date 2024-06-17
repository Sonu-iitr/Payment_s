const Submit = ({title})=>{
    return (
        <>
        <div className="font-normal text-sm lg:text-base text-[#111111] pb-10">
                    <input type="checkbox"/> By creating an account, I agree to our Terms of use and Privacy Policy 
            </div>
        <button className="font-[22px] font-[500] text-[#FFFFFF] bg-[#1F1F1F] w-full rounded-lg h-[48px]">{title}</button>
        </>
    )
}

export default Submit;