import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState } from 'react'
import Layout from "../components/layout/Layout";
import Aside from "../components/asidebar/Asidebar";
import {useRouter} from "next/router";
import {useEffect} from "react";
import React from 'react'
import {signIn , signOut , useSession} from 'next-auth/client';
export default function Home() {
  const [session , loading] = useSession()
  const router = useRouter()
  function takeMeHome(){
    router.push('/online')
  }
  useEffect(()=> {

  })

  return (
          <Layout>
            <div className={styles.container}>
              {!session  && (
                  <>
                  Notsigned in
                      <button onClick={signIn}>Sign in</button>
                  </>
              )}
                {session  && (
                    <>
                        signed in as {session.user.name}
                        {console.log(session)}
                        <br/>
                        <div>you can see the protect route</div>
                        <button onClick={signOut}>Sign out</button>
                    </>
                )}
            </div>
          </Layout>
  )
}
