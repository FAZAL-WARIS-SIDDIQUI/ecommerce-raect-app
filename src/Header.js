import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Headers = (props) => {
    return (
        <div className="fix">
            <div className="header-container">
                <div  onClick={() => props.handelShow(false)}>
                    <h1 className="logo" >
                        MEN FACTION</h1>
                        </div>
                <h1 onClick={()=>props.handelShow(true)} className="logo">CARD<AiOutlineShoppingCart /><sup className="card-logo">
                    {props.items}
                </sup></h1>



            </div>
        </div>
    );
}
export default Headers