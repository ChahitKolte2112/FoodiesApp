import React, { useState } from "react";
import List from "../component/List";
import { topPickData } from "../../Assets/data";


const AddtoCart = () => {
    let sum = 0;
    for (let i = 0; i < topPickData.length; i++) {
        sum = sum + topPickData[i].price;
    }
    // const location = useLocation();

    const [grandTotal, setGrandTotal] = useState(sum);
    // console.log(grandTotal);
    return (
        <div className="flex justify-center bg-slate-100">
            {/* <div>{location.state.name}</div> */}
            <div className=" max-w-[1300px] ">
                <div className="flex justify-center p-2 items-center">
                    <div className="max-w-[full] my-5 p-2 flex justify-center">
                        <p>Total:{grandTotal} </p>
                    </div>
                    <div className="max-w-[full] min-w-0 flex-col align-center">
                        <button className=" bg-orange-400 px-3 py-1 rounded-md">
                            Checkout
                        </button>
                    </div>
                </div>
                <div className="flex justify-between border-b-2 border-black">
                    <div className="mx-2">
                        <p>NAME</p>
                    </div>
                    <div>
                        <p>PRICE</p>
                    </div>
                    <div>
                        <p></p>
                    </div>
                    <div className="mx-2">
                        <p>TOTAL</p>
                    </div>
                </div>
                <ul>
                    {topPickData.map((expense) => {
                        return (
                            <li>
                                <List
                                    expense={expense}
                                    grandTotal={setGrandTotal}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default AddtoCart;
