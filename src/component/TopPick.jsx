import React from "react";
import Caurosel from "./Carousel";

import { topPickData } from "../../Assets/data";

const TopPick = () => {
    return (
        <>
            {" "}
            <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
                Top Pick
            </h1>
            <div className="w-[100%]">
                <Caurosel />
            </div>
        </>
    );
};

export default TopPick;
