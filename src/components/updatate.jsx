import { useDispatch , useSelector } from "react-redux"
import { change_city, change_country, change_population  } from "../Reducer/action"
import {useState} from "react"
import axios from "axios"
import { Store } from "../Reducer/sotre"
import { Navbar } from "./navbar"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"


export const Updatecity = () => {

    const dispatch = useDispatch()

    const [city , setCity] = useState()
    const [country , setCountry] = useState()
    const [population , setPopulation] = useState()
     const {id} = useParams()

    const value = useSelector((store => store) )


    // console.log("value :" , value)


    const data = {
        city : city,
        country : country,
        population : population
    }
    
    const   handelSubmit = () => {

        axios.put(`http://localhost:3001/city/${id}`, data).then(function(res){
            console.log(res.data)
        })


        dispatch(change_city(city))
        dispatch(change_country(country))
        dispatch(change_population(population))
    }


    return(
        <div>

            <h1>Update Page</h1>

            <Navbar/>

            <input 
                type="text"
                placeholder="Enter city"
                onChange={(e) => {
                setCity(e.target.value)
            }}
            /> <br />

            <input 
                type="text"
                placeholder="Enter Country"
                onChange={(e) => {
                    setCountry(e.target.value)
                }}
            /> <br />

            <input 
                type="text" 
                placeholder="Enter population"
                onChange={(e) => {
                    setPopulation(e.target.value)
                }}    
            /> <br />


                < td ><Link to={"/"}> <button
                    onClick={handelSubmit}
                >Edit</button></Link></td>

        </div>
    ) 
}