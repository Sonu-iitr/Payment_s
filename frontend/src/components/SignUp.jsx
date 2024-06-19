import Header from "./signcomps/header"
import Input from "./signcomps/Input";
import Submit from "./signcomps/Submit";
import Illi from "./signcomps/Illustration.png"
import axios from "axios"
import { useEffect, useState } from "react";

const SignUp = ()=>{

    const [firstName, setFirst]  = useState("");
    const [lastName, setLast]  = useState("");
    const [email, setEmail]  = useState("");
    const [password, setPassword]  = useState("");
    
    return (
        <div className="h-screen flex justify-center bg-[#1F1F1F] items-center">
            <div className="flex py-10 w-[80%] h-[80%] lg:w-3/4  border bg-white shadow-xl justify-center items-center rounded-lg">
            <div className="w-[80%] md:w-[60%] lg:w-[40%]">
                <Header title={"Create an Account"} caption={"Already have an account?"} buttontext={" LogIn"} to={"/signin"}></Header>
                <Input onChange={e =>{setFirst(e.target.value)}} title={"First Name"}></Input>
                <Input onChange={e =>{setLast(e.target.value)}} title={"Last Name"}></Input>
                <Input onChange={e =>{setEmail(e.target.value)}} title={"Email"}></Input>
                <Input onChange={e =>{setPassword(e.target.value)}} title={"Password"}></Input>
                <Submit onClick ={()=>{
                    axios.post("http://localhost:3000/user/signup",{
                        firstName,
                        lastName,
                        email,
                        password
                    })
                }} title={"Create Account"}></Submit>
            </div>
            <img className = "hidden lg:block" src={Illi} alt="" />
            </div>
        </div>
    )
}

export default SignUp;