import Style from "./Style.module.css"
import { useEffect, useState } from "react";

function Navbar () {
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const interValid = setInterval(()=>{
            setTime(new Date());
        }, 1000);
    });

    return(
        <>
        <nav className={Style.nav}>

            <div>
                <h2>Logo</h2>
            </div>

            <div>
                <ul className={Style.ul}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">AddContant</a></li>
                </ul>
            </div>
            <div className={Style.timediv}>
                <h3>{time.toLocaleTimeString()}</h3>
                <h3>{new Date().toLocaleDateString()}</h3>
            </div>
        </nav>
        </>
    )
};

export default Navbar;