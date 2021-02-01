import Layout from "../../components/layout/Layout";
import styles from './Online.module.css'
import {BsSearch }from 'react-icons/bs'
import Searchbar from "../../components/searchbar/Searchbar";
import Catlog from "../../components/catlog/Catlog";
function Online (){
    return(
        <Layout>
            <div className={styles.container}>
                <div className={styles.search}>
                    <div className={styles.input}>
                        <Searchbar />
                        <div className={styles.icon}>
                            <BsSearch />
                        </div>
                    </div>
                </div>
                    <div className={styles.main}>
                     <div className={styles.parent_div}>
                         <div>
                             <img src="/l1.jpeg" alt=""/>
                         </div>
                         <div>
                             <img src="/s1.jpeg" alt=""/>
                         </div>
                     </div >
                        <div className={styles.parent_div}>
                            <div>
                                <img src="/l2.jpeg" alt=""/>
                            </div>
                            <div>
                                <img src="/s2.jpeg" alt=""/>
                            </div>
                        </div>
                        <div className={styles.parent_div}>
                            <div>
                                <img src="/l3.jpeg" alt=""/>
                            </div>
                            <div>
                                <img src="/s3.jpeg" alt=""/>
                            </div>
                        </div>
                        <div className={styles.parent_div}>
                            <div>
                                <img src="/s4.jpeg" alt=""/>
                            </div>
                            <div>
                                <img src="/l4.jpeg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.catalog}>
                        <Catlog />

                    </div>
                    <div className={styles.main}>
                        <div className={styles.parent_div}>
                            <div>
                                <img src="/s5.jpeg" alt=""/>
                            </div>
                            <div>
                                <img src="/s6.jpeg" alt=""/>
                            </div>
                        </div>
                        <div className={styles.parent_div}>
                            <div>
                                <img src="/s7.jpeg" alt=""/>
                            </div>
                            <div>
                                <img src="/s8.jpeg" alt=""/>
                            </div>
                        </div>
                            <div className={styles.parent_div}>
                                <div>
                                    <img src="/s9.jpeg" alt=""/>
                                </div>
                                <div>
                                    <img src="/s10.jpeg" alt=""/>
                                </div>
                            </div>
                            <div className={styles.parent_div}>
                                <div>
                                    <img src="/s11.jpeg" alt=""/>
                                </div>
                                <div>
                                    <img src="/s12.jpeg" alt=""/>
                                </div>
                            </div>

                    </div>


            </div>
        </Layout>
    )
}
export default Online