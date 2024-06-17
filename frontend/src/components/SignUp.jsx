import Header from "./signcomps/header"
import Input from "./signcomps/Input";
import Terms from "./signcomps/Terms";
import Submit from "./signcomps/Submit";
import Illi from "./signcomps/Illustration.png"
import { useEffect, useState } from "react";

const SignUp = ()=>{
    
    return (
        <div className="h-screen flex justify-center bg-[#1F1F1F] items-center">
            <div className="flex w-[80%] h-[80%] lg:w-3/4 lg:h-3/4 border bg-white shadow-xl justify-center items-center rounded-lg">
            <div className="w-[80%] md:w-[60%] lg:w-[40%]">
                <Header title={"Create an Account"} caption={"Already have an account?Log In"}></Header>
                <Input title={"First Name"}></Input>
                <Input title={"Last Name"}></Input>
                <Input title={"Email"}></Input>
                <Input title={"Password"}></Input>
                <Terms></Terms>
                <Submit title={"Create Account"}></Submit>
            </div>
            <img className = "hidden lg:block" src={Illi} alt="" />
            </div>
        </div>
    )
}

export default SignUp;