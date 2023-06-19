import React from "react";
import { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import {Link} from "react-router-dom";
import {
    AiOutlineMenu,
    AiOutlineClose,
    AiOutlineSearch,
    AiFillTag,
} from "react-icons/ai";
import SideBar from "./SideBar";
// import { Link } from "react-router-dom";

const TopNav = () => {
    const [sideNav, setSideNav] = useState(false);
    const openSideNav = () => {
        setSideNav(!sideNav);
    };
    return (
        <div>
            <div className="max-w-[1520]  mx-auto flex justify-between items-center p-4 ">
                <div className="flex items-center">
                    <div className="cursor-pointer" onClick={openSideNav}>
                        <AiOutlineMenu size={25} />
                    </div>
                    <h1 className="sm:text-1xl lg:text-3xl px-4">
                        YUM<span>EATs</span>
                    </h1>
                    <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 mx-2 text-[16px] ">
                        <p className=" bg-orange-500  rounded-full p-1 text-bold text-white">
                            Free
                        </p>
                        <p className="p-1 text-bold ">Delivery</p>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-full  flex items-center px-2 w-[200px] sm:w0[400px] lg:w-[500px]">
                    <AiOutlineSearch size={25} />
                    <input
                        className="  bg-transparent p-2 w-full focus:outline-none text-[16px]"
                        type="text"
                        placeholder="serach meals"
                    />
                </div>
                <Link  to="/AddtoCart" className="bg-orange-500 rounded-full hidden md-[500px]:flex items-center px-5 py-1 text-white">
                    <BsFillCartFill size={20} />{" "}
                    <p className=" px-3 text-[18px]">Cart</p>
                </Link>
            </div>
            {sideNav ? (
                <div className=" bg-black/50 w-[100%] h-screen  text-white  fixed z-10 top-0 left-0   duration-100">
                    <div className="bg-white  w-[300px] : h-full  fixed top-0 left-0 ">
                        <div style={{ marginTop: "25px" }}>
                            <div className="text-black  bg-gray-200 flex justify-between items-center mx-1 py-2   rounded-xl ">
                                <div className="mx-2">
                                    YUMM
                                    <span
                                        style={{
                                            color: "orangered",
                                            textDecoration: "bold",
                                        }}
                                    >
                                        EATs
                                    </span>
                                </div>
                                <div
                                    onClick={openSideNav}
                                    className="border-e-8  mx-1 cursor-pointer"
                                >
                                    <AiOutlineClose size={20} />
                                </div>
                            </div>
                        </div>
                        <SideBar />
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default TopNav;
