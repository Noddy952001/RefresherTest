import React from "react"
import { Change_Country } from "../Reducer/action"
import { useSelector ,useDispatch } from "react-redux"
import axios from "axios"
import {Navbar} from "./navbar"


export const AddCountry = () => {

    const dispatch = useDispatch()
    const value = useSelector((store => store) )

    const [country , setCountry] = React.useState()

    const data = {
        country : country
    }

    const handelsumit = () => {

        axios.post("http://localhost:3001/country", data).then(function(res){
            console.log(res.data)
        })
        dispatch(setCountry(country))

    }

    return(
        <div>

        <h1>Add Country</h1>

        <Navbar/>

            <input 
                type="text" 
                placeholder="Enter Country"
                onChange={(e) => {
                    setCountry(e.target.value)
                }}
                
            />

            <button
                onClick={handelsumit}
            >add</button>
            

        </div>
    )
}
