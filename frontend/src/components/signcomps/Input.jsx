const Input = ({title , setfunction})=>{
    return(
        <>
        <div className="font-normal text-base text-[#666666]">
            {title}
        </div>
        <input onChange={e =>{setfunction(e.target.value)}} className="border border-solid border-[rgba(102,102,102,0.35)] rounded-[9px] h-[32px] w-full" ></input>
        </>
    )
}

export default Input;