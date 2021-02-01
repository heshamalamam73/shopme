import styles from './Footer.module.css'
import {AiFillFacebook,AiFillApple,AiFillAndroid,AiFillInstagram,AiFillTwitterCircle,AiFillYoutube} from 'react-icons/ai'

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
               <div className={styles.social_media}>
                   <div className={styles.social}>
                       <div className={styles.social_item}>
                           <div className={styles.social_icon}><AiFillFacebook/></div>
                           <div className={styles.social_title}>facebook</div>
                       </div>
                       <div className={styles.social_item}>
                           <div className={styles.social_icon}><AiFillInstagram/></div>
                           <div className={styles.social_title}>Instgram</div>
                       </div>
                       <div className={styles.social_item}>
                           <div className={styles.social_icon}><AiFillTwitterCircle/></div>
                           <div className={styles.social_title}>Twiter</div>
                       </div>
                       <div className={styles.social_item}>
                           <div className={styles.social_icon}><AiFillYoutube/></div>
                           <div className={styles.social_title}>Youtube</div>
                       </div>

                   </div>
                   <div className={styles.apps}>
                       <div className={styles.social_item}>
                           <div className={styles.social_title}>nustra app</div>
                       </div>
                       <div className={styles.social_item}>
                           <div className={styles.social_icon}><AiFillApple/></div>
                           <div className={styles.social_title}>ios</div>
                       </div>
                       <div className={styles.social_item}>
                           <div className={styles.social_icon}><AiFillAndroid/></div>
                           <div className={styles.social_title}>Android</div>
                       </div>

                   </div>
               </div>
                <div className={styles.lists}>
                    <div className={styles.list_container}>
                        <div className={styles.list_title}>su shopme</div>
                        <ul>
                            <li> chi siamo</li>
                            <li> politica sulla privacy</li>
                            <li> politica sui cookies</li>
                            <li>condizione d'uso e vendita</li>
                        </ul>
                    </div>
                    <div className={styles.list_container}>
                        <div className={styles.list_title}>Contattaci</div>
                        <ul>
                            <li> aiuto</li>
                        </ul>
                    </div>
                    <div className={styles.list_container}>
                        <div className={styles.list_title}>transaccion segura</div>
                        <ul className={styles.pay_imgs}>
                            <li><img src="/visa.png" alt=""/> </li>
                            <li><img src="/ms.png" alt=""/> </li>
                            <li><img src="/pal.svg" alt=""/> </li>
                        </ul>
                    </div>
                    <div className={styles.list_container}>
                        <div className={styles.list_title}>Premium</div>
                        <ul>
                            <li> Approfitta di tutte le occasioni di Shopme</li>
                            <li><a href="#"> diventa premium</a></li>
                        </ul>
                    </div>


                </div>

            </div>

        </div>
    )

}

export default Footer