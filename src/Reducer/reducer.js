import { Change_City ,Change_Country , Change_Population } from "./action"

const initialstate = {
    city : "",
    country : "",
    population : ""
}


export const reducer = (store =  initialstate , { type,payload}) => {
        // console.log( "stoe: ", store)

        switch(type)
        {
            case  Change_City :
                return ({...store , city : payload})
            case Change_Country :
                return ({...store , country : payload})
            case Change_Population :
                return ({...store , population :payload})
               
            default :
                return store
        }

}

