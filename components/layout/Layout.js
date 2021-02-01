import Header from "../header/Header";
import Footer from "../footer/Footer";
import Aside from "../asidebar/Asidebar";
import styles from './Layout.module.css'
function Layout({children}){
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header/>
            </div>

            <Aside />
            <div className={styles.main}>
                {children}
            </div>
            <div className={styles.footer}>
                <Footer />

            </div>
        </div>
    )

}
export  default Layout