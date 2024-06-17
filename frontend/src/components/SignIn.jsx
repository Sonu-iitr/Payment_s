import Header from "./signcomps/header"
import Input from "./signcomps/Input";
import Submit from "./signcomps/Submit";
import Illi from "./signcomps/Illustration.png"
import { useEffect, useState } from "react";

const SignIn = ()=>{
    const [email, setEmail]  = useState("");
    const [password, setPassword]  = useState("");


    return (
        <div className="h-screen flex justify-center bg-[#1F1F1F] items-center">
            <div className="flex w-[80%] py-10 lg:w-3/4 lg:h-3/4 border bg-white shadow-xl justify-center items-center rounded-lg">
            <div className="w-[80%] md:w-[60%] lg:w-[40%]">
                <Header title={"LogIn to your Account"} caption={"Create a new Account"}></Header>
                <Input setEmail={setEmail} title={"Email"}></Input>
                <Input setPassword={setPassword} title={"Password"}></Input>
                <Submit title={"Create Account"}></Submit>
            </div>
            <img className = "hidden lg:block" src={Illi} alt="" />
            </div>
        </div>
    )
}

export default SignIn;