import styles from './Login.module.css'
import {AiFillFacebook ,AiOutlineShoppingCart} from 'react-icons/ai'
import {useState} from 'react'
import jwt from 'jsonwebtoken'
import {useRouter} from "next/router";

function  Login () {
    const [username,setUsername ] = useState("")
    const [email,setEmail ] = useState("")
    const [password,setPassword ] = useState("")
    const [message,setMessage ] = useState("")
    const router = useRouter()
    function takeMeHome(){
        router.push('/online')
    }
     async function handleSubmit(e) {
        e.preventDefault()
        const res = await  fetch("/api/login", {
            method:"POST",
            headers:{
                "Content-type" :"application/json"
            },
            body : JSON.stringify({email,password ,username})
        }).then(t => t.json())
        const token = res.token
        if(token){
            const json = jwt.decode(token)
            setMessage(`welcome ` + json.email)
            setTimeout(()=> {
                takeMeHome()
            },2000)
        }else{
            setMessage(res.message)
        }

    }
    return (
        <div className={styles.container}>
            <div className={styles.head}>

                <div className={styles.logo}>
                    <div className={styles.logo_img}>
                        <AiOutlineShoppingCart />
                    </div>
                    shopme
                </div>

            </div>
                <div className={styles.body}>
                    { message ? <div className={styles.message}>{message}</div> : null}

                    <form  >
                        <button className={styles.fb_login}>
                            <div className={styles.icon}>
                                <AiFillFacebook />
                            </div>
                            <div className={styles.btn_title}>
                                continue with facebook
                            </div>
                        </button>
                        <div className={styles.form_item}>
                            <input type="text" name="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className={styles.form_item}>
                            <input type="password" name="password" placeholder="Password" id="" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className={styles.p_small}>
                            hai dimenticato la tua password
                        </div>
                        <div className={styles.form_item}>
                            <button type='submit' className={styles.Login_btn} onClick={handleSubmit}>Accedi</button>
                        </div>
                        <div className={styles.p_larg}>
                            shopme , le tue marche preferite con sconti fino 70%
                        </div>
                        <div className={styles.form_item}>
                            <button className={styles.Login_btn}>Registrarti</button>
                        </div>
                    </form>

                </div>




        </div>
    )
}
export default  Login;