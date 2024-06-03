import React from "react";
import { useLocation } from "react-router";
// import { Outlet } from "react-router";
export function Home(){
    return(
        <div>
            <h1>Home</h1>
        </div>
    );
}
export function About(){
    return(
        <div>
            <h2>About</h2>
            <p>我們是賣衣服的</p>

        </div>
    )
}

export function Precautions() {
    return (
        <div>
            <h1>!!!!Precautions!!!!</h1>
            <ol>
                <li>退貨須知
                    <ol>
                        <li>內衣褲貼身衣物不可退貨</li>
                        <li>衣物下水之後不可退貨</li>
                        <li>衣物吊牌剪後不可退貨</li>
                    </ol>
                </li>
            </ol>
        </div>
    );
}

export function Error404(){
    let location = useLocation()
    return(
        <div>
            <h1>404 Error</h1>
            <p>Resource not found at {location.pathname}</p>
        </div>
    )
}

export function Clothing(){
    return(
        <div>
            <h2>Clothing</h2>
            <img src="https://storage.googleapis.com/www-cheers-com-tw/article/202008/article-5f46150797fc6.jpg"/>

        </div>
    )
}
export function Pants(){
    return(
        <div>
            <h2>Pants</h2>
            <img src="https://i.epochtimes.com/assets/uploads/2021/05/id12972460-497514-450x600.jpg"/>
        </div>
    )
}
export function Skirt(){
    return(
        <div>
            <h2>Skirt</h2>
            <img src="https://mall.iopenmall.tw/website/uploads_product/website_34351/P3435104846479_3_42028908.jpeg?hash=85100"/>
            
        </div>
    )
}

