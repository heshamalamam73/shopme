import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState } from 'react'
import HomePage from "../components/home/HomePage";
import Layout from "../components/layout/Layout";
import Aside from "../components/asidebar/Asidebar";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Home() {
  const [auth , setAuth] = useState(false)
  const router = useRouter()
  function takeMeHome(){
    router.push('/online')
  }
  useEffect(()=> {
    if (auth){
      takeMeHome()
    }
    else {
    router.push('/login')
    }
  })

  return (
    <div >

          <Layout>
            <div className={styles.container}>
              normal home page
            </div>
          </Layout>



    </div>
  )
}
