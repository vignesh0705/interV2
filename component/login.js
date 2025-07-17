"use client"
import React from 'react'
import {signIn,useSession} from "next-auth/react"


const Login = () => {
    const {data:session}=useSession();
    if(session){
        return (
            <>
               <Home val={session.user.name}/>
            </>
        )
    }
  return (
    <div className='login_area'>
          <div className="form_area">
               <h1>Login</h1>
               <form action="">
                   <input type="text" />
                   <input type="password" />
               </form>
               <button>Login</button>
               <p>login with <span onClick={()=>signIn()}>Other way</span></p>
          </div>

    </div>
  )
}

export default Login