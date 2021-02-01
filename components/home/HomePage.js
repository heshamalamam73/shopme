import styles from './Home.module.css'
import Login from "../login/Login";
function  HomePage () {
    return (
        <div className={styles.container}>
            <Login />
        </div>
    )
}
export default  HomePage