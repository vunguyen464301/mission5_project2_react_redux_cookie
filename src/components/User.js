import React from 'react';
import {Redirect} from 'react-router-dom'
const User =()=>{
    // const loadpage=()=>{
        var data=document.cookie;
        if(data.length>0){
            let sp1=data.split(';');
            let sp_3=sp1[2].split('=');
            console.log(sp_3[1])
            if(sp_3[1]==='true'){
                return(
                 <div className="center mt-5">
                     <h1> User</h1>
                </div>
                )
            }
        }
        return(
            <div>
                <Redirect to='/login'/>
           </div>
           )
        }
export default User;