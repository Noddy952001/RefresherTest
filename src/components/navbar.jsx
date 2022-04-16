import React from "React"
import { Link } from "react-router-dom"


export const Navbar = () => {
    return(
        <div  style={{display : "flex" , justifyContent: "space-between" , width: "60%" , marginLeft:"20%"}}>
             <Link to="/">Home</Link>
             <Link to="/city">Add_City</Link>
             <Link to="/country">Add_Country</Link>
        </div>
    )
}
