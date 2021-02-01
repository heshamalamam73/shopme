import styles from './Searchbar.module.css'
function Searchbar({rest}){
    return(
            <input type="text" {...rest} className={styles.input}/>
    )
}
export default Searchbar;