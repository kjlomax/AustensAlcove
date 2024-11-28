
// import { useState,useEffect } from "react";

import AUTH from '../utils/auth';
import '../styles/login.css'
const ViewProfile=()=>{




    // const [data, setData]= useState([])
    // console.log(`more: ${data}`)
    // useEffect(()=>{
    //     const getUsers= async()=>{
    //         try {
    //             const data = await retrieveUsers();
    //             console.log(`data: ${data}`)
    //             setData(data);
    //         } catch (error) {
                
    //         }
    //     }
    //     getUsers();
    // },[])
    return(
        <div className='all'>
            
           <h2>{AUTH.getProfile().id}</h2>
           <h2>{AUTH.getProfile().email}</h2>
           <h2>{AUTH.getProfile().username}</h2>
                
            
        </div>
             
         
    
    )


}


export default ViewProfile;