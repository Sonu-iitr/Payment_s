const UsersCard = ()=>{
    return (
        <div className="mx-auto font-inter w-[90%] my-10 " >
            <div className="text-2xl font-semibold my-10 ">Luvpreet Singh</div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[32px]">
            <Card label={"Check Balance"}></Card>
            <Card label={"Search"}></Card>
            <Card label={"Send Money"}></Card>
            </div>
        </div>
    )
}

const Card = ({label})=>{
    return(
        <div className="flex font-inter font-medium text-xl items-center h-[180px] justify-center border rounded-lg border-[#F7F7F7] shadow-lg  ">
            {label}
        </div>
    )
}

export default UsersCard;