import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, {useEffect} from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import Layout from "../components/layout/Layout";
import {useRouter} from "next/router";

export default function Home() {
    // const [session, loading] = useSession();
    const router =useRouter()
    useEffect(()=> {
        router.push('./login')
    }
)
    return (

        // <div className={styles.container}>
        //     <Head>
        //         <title>Auth Examples</title>
        //         <link rel="icon" href="/favicon.ico" />
        //     </Head>
        //
        //     <main className={styles.main}>
        //         {!session && (
        //             <>
        //                 Not signed in <br />
        //                 <button onClick={signIn}>Sign In</button>
        //             </>
        //         )}
        //         {session && (
        //             <>
        //                 Signed in as {session.user.email} <br />
        //                 <div>You can now access our super secret pages</div>
        //                 <button>
        //                     <Link href="/secret">To the secret</Link>
        //                 </button>
        //                 <button onClick={signOut}>sign out</button>
        //             </>
        //         )}
        //     </main>
        // </div>
        <Layout>
            <div className={styles.container}>


            </div>
        </Layout>
    );
}