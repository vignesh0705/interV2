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
        <h1>you are signin in as {session.user.email} </h1>
        <h2>User Name: {session.user.name}</h2>
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
