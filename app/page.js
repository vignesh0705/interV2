"use client";

import UserNavbar from "@/component/homepagenavbar";
import styles from "./page.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Login from "@/component/login";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <UserNavbar />
        <h1 className="home">you are signin in as:<br/> Email: {session.user.email} </h1>
        <h2 className="name">User Name: {session.user.name}</h2>
        {/* <button onClick={()=> signOut()}>signout</button> */}
      </>
    );
  }
  return (
    <div className={styles.page}>
      <Login />

      {/* <h1>please sign in</h1>
        <button onClick={()=>signIn()}>sign in</button> */}
    </div>
  );
}
