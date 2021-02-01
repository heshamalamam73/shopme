import styles from './Catlog.module.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
function Catlog (){



    return(
        <div className={styles.container}>
            <div className={styles.head}>
                <div className={styles.title}>
                    Catalogo

                </div>

            </div>
            <div className={styles.items} id='items'>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <img src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                    </div>
                    <div className={styles.item_desc}>
                        <div className={styles.title}>Sport</div>
                        <div className={styles.icon}> <AiOutlineArrowRight/> </div>
                    </div>
                    
                </div>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <img src="https://images.pexels.com/photos/4602025/pexels-photo-4602025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                    </div>
                    <div className={styles.item_desc}>
                        <div className={styles.title}>Moda</div>
                        <div className={styles.icon}> <AiOutlineArrowRight/> </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <img src="https://images.pexels.com/photos/3255245/pexels-photo-3255245.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                    </div>
                    <div className={styles.item_desc}>
                        <div className={styles.title}>Casa</div>
                        <div className={styles.icon}> <AiOutlineArrowRight/> </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <img src="https://images.pexels.com/photos/2276589/pexels-photo-2276589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                    </div>
                    <div className={styles.item_desc}>
                        <div className={styles.title}>kids</div>
                        <div className={styles.icon}> <AiOutlineArrowRight/> </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <img src="https://images.pexels.com/photos/3812743/pexels-photo-3812743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    </div>
                    <div className={styles.item_desc}>
                        <div className={styles.title}>beaute</div>
                        <div className={styles.icon}> <AiOutlineArrowRight/> </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default  Catlog;