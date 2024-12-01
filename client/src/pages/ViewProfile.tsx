
import { useState,useEffect } from "react";

import AUTH from '../utils/auth';
import '../styles/login.css'
import {getBook} from '../api/getBook'
const ViewProfile=()=>{
    const [datas, setData] = useState([])
    useEffect(()=>{
        getBook()
            .then((data)=> setData(data))
            .catch((err)=> console.log(err))
    },[])
console.log(AUTH.getProfile().username)

    return(
        <div className='all'>
            <div className='padd'>
            <h2>{AUTH.getProfile().username}</h2>
           </div>

           <h2>Your books</h2>
            <div key={book.id}>

            </div>
            
        </div>
             
         
    
    )


}


export default ViewProfile;