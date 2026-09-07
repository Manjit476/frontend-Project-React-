import React, { useEffect ,useState} from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";


function Github(){
    const data=useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(Response => Response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return(
        <div className="bg-gray-600 text-3xl text-white text-center m-4">
            Github followers:{data.followers}
            <img className="rounded-full" width="100"  margin="auto" src={data.avatar_url}  alt="Git picture" />
        </div>
    )
}
export  default Github;


export const githubInfoLoader = async()=>{
    const response= await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()

}