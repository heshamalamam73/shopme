import styles from './Asidebar.module.css'
import {BsList} from "react-icons/bs";
import Link from 'next/link'
function Aside (){
    const handleHideMe =()=>{
        const me = document.getElementById("menu")
        me.style.marginLeft="-300px"
    }
    return(
        <div className={styles.container} id='menu'>
            <div className={styles.head}>
                <div className={styles.logo}> </div>
                <div className={styles.icon} onClick={handleHideMe}>
                    X
                </div>

            </div>
            <ul className={styles.aside_list}>
                <li>
                  <Link href='/vendeta'>Le vendite</Link>
                </li>
                <li>
                    <Link href='/profile'>
                        Il mio account
                    </Link>
                </li>
                <li>
                    <Link href='/profile'>
                        I miei ordini
                    </Link>
                </li>
                <li>
                    <Link href='/profile'>
                       Le mie comunicazioni
                    </Link>
                </li>
                <li>
                    <Link href='/profile'>
                        invita i tuoi amici
                    </Link>
                </li>
                <li>
                    <Link href='/profile'>
                       aiuto & contatto
                    </Link>
                </li>
                <li>
                    <Link href='/profile'>
                        Uscire
                    </Link>
                </li>
            </ul>

        </div>
    )
}
export default Aside;