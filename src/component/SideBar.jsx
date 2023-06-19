import React from "react";

import { FaUserFriends, FaGoogleWallet } from "react-icons/fa";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
const SideBar = () => {
    return (
        <div className=" w-[100%]   my-5 bg-white-400 ">
            <nav>
                <ul>
                    <li className="flex  text-xl justify-start  ml-5  items-center">
                        <BsPerson
                            size={25}
                            className=" mr-4 text-white bg-black mr-5 rounded-full"
                        />
                        <li className="text-black">My account</li>
                    </li>
                    <li className="flex  text-xl justify-start  ml-5 my-6  items-center">
                        <TbTruckReturn
                            size={25}
                            className="mr-4 text-white bg-black mr-5 rounded-full"
                        />
                        <li className="text-black">Delivery</li>
                    </li>
                    <li className="flex text-xl justify-start  ml-5 my-6  items-center">
                        <FaUserFriends
                            size={25}
                            className="mr-4 text-white bg-black mr-5 rounded-full"
                        />
                        <li className="text-black">Friends</li>
                    </li>
                    <li className="flex  text-xl justify-start  ml-5 my-6  items-center">
                        <FaGoogleWallet
                            size={25}
                            className="mr-4 text-white bg-black mr-5 rounded-full"
                        />
                        <li className="text-black">Wallet</li>
                    </li>
                    <li className="flex  text-xl justify-start  ml-5 my-6  items-center">
                        <MdOutlineFavorite
                            size={25}
                            className="mr-4 text-white bg-black mr-5 rounded-full"
                        />
                        <li className="text-black">Favourite</li>
                    </li>
                    <li className="flex  text-xl justify-start  ml-5 my-6 items-center">
                        <MdHelp
                            size={25}
                            className="mr-4 text-white bg-black mr-5 rounded-full"
                        />
                        <li className="text-black">Help</li>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;
