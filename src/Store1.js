import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
export function Store(){
    return(
        <div>
            <h1>Store</h1>
            <nav>
                <Link to ="Clothing">Clothing</Link><br/>
                <Link to ="Pants">Pants</Link><br/>
                <Link to ="Skirt">Skirt</Link>
            </nav>
            <Outlet/>
        </div>
    );
}
