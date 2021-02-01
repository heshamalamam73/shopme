import styles from './Header.module.css'
import {BsList} from 'react-icons/bs'
import {BiHomeHeart , BiUser} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Link from 'next/link'
import {VscMenu} from'react-icons/vsc'
function Header() {

    const handleShow = ()=>{
        const myMenu = document.getElementById("menu")
        myMenu.style.marginLeft="0px"    }
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.humborger} onClick={handleShow}>
                    <div className={styles.icon}  >
                        <VscMenu  size='25px' />
                    </div>
                    <div className={styles.nav_title}>
                        menu
                    </div>
                </div>
                <div className={styles.logo}>
                    <Link href={'/'}>
                        <div className={styles.h1}>
                            Shopme
                        </div>
                    </Link>

                </div>
                <div className={styles.nav_items}>
                    <ul>
                        <li className={styles.home}>
                            <Link href='/'>
                                <a>
                                    <div className={styles.icon}>
                                        <BiHomeHeart/>
                                    </div>
                                    <div className={styles.nav_title}>
                                        Home
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className={styles.cart}>
                            <Link href='/cart'>
                                <a>
                                    <div className={styles.icon}>
                                        <AiOutlineShoppingCart/>
                                    </div>
                                    <div className={styles.nav_title}>
                                        Cart
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className={styles.user}>
                            <Link href='/'>
                                <a>
                                    <div className={styles.icon}>
                                        <BiUser/>
                                    </div>
                                    <div className={styles.nav_title}>
                                        User
                                    </div>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>


            </div>
            <div className={styles.top_nav}>
                <ul>
                    <li><Link href="/products" ><a >tutte</a></Link></li>
                    <li><Link href="/online/moda"><a >moda</a></Link></li>
                    <li><Link href="/online/casa"><a >casa</a></Link></li>
                    <li><Link href="/online/bambini"><a >bambini</a></Link></li>
                    <li><Link href="/online/sport"><a >sport</a></Link></li>
                    <li><Link href="/online/sport"><a >sport</a></Link></li>
                    <li><Link href="/online/catalogo"><a >catalogo</a></Link></li>


                </ul>

            </div>
        </div>
    )

}

export default Header