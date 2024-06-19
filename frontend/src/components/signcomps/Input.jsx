const Input = ({title , onChange})=>{
    return(
        <>
        <div className="font-normal text-base text-[#666666]">
            {title}
        </div>
        <input onChange={onChange} className="border border-solid border-[rgba(102,102,102,0.35)] rounded-[9px] h-[32px] w-full" ></input>
        </>
    )
}

export default Input;