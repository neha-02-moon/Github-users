import React, { useEffect, useState } from 'react'
import GIT from './images/GIT.png'

const UseffectAPI = ()=>{

const [users,setUsers]=useState([]);

const getUsers = async ()=>{
    const response = await fetch('https://api.github.com/users');
   // console.log(response);  // we have to check on inspect  whatever promise return it is in pending state or not
    //const data =await response.json(); //data will be converted into json format 
    setUsers(await response.json());
}

useEffect(() => {
//we created getUser function useeffect will call this function
getUsers() 

},[])




return(
    <>
    <h2>GIT HUB USERS</h2>
     <div className='container'>
         
             {
                 users.map((curElem) =>
                 {
                    return(
                        <div> 
                            <div className='row text-center'>
                            <div className='col-10 col-md-4 mt-5'>
                 <div className='card p-2'>
                     <div className='d-flex align-items-center'>
                         <div className='image'> <img src={GIT} class="rounded" width="155"/></div>
                         <div className='ml-3 w-100'>
                             <h4 className='mb-0 mt-0 textleft'>{curElem.login}</h4>
                             <span className='textleft'>WEB Developer</span>
                             <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                                 <div className='d-flex flex-column'><span className='articles'></span>ID<span className='number1'>{curElem.id}</span></div>
                                 <div className='d-flex flex-column'><span className='followers'>Followers</span><span className='number2'>{curElem.followers}</span></div>
                                 <div className='d-flex flex-column'><span className='rating'></span>Rating<span className='number3'>8.9</span></div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     
         </div>

                       
                    ) 
                    
                 })
             }
     </div>        
     
    </>
)


}
export default UseffectAPI