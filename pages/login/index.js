import Layout from "../../components/layout/Layout";
import styles from '../signup/signup.module.css'
import {AiFillFacebook, AiOutlineShoppingCart} from "react-icons/ai";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import { providers, signIn, getSession, csrfToken } from "next-auth/client";
export default  function SignIn({ providers, csrfToken }){
    const router = useRouter()
    const [email,setEmail ] = useState("")
    const [password,setPassword ] = useState("")
    const [message,setMessage ] = useState("")
    const [errors , setErrors ] = useState({});
    const [isSubmitting , setIsSubmitting] = useState(false);

    useEffect(()=> {
        if(isSubmitting){
            if(Object.keys(errors).length === 0 ){
                createUser()
            }
            else{
                setIsSubmitting(false)
            }
        }

    },[errors])
    const createUser= async ()=>{
        try {
            const res = await fetch('/api/login' , {
                method : "POST",
                headers :{
                    "accept" : "application/json",
                    "Content-type" :"application/json"
                },
                body : JSON.stringify({email,password})
            }).then(t => t.json())
            const {token} = res;
            if(token){
                setMessage("welcome " + res.name)
                setTimeout(()=> {
                    router.push('/online')
                },2000)
            }else {
                setMessage(res.message)
            }

        }catch(error) {
            setMessage(error.message)
        }
    }
    const handleSubmit = (e)=> {
        e.preventDefault()
        let errs = validate();
        setErrors(errs);
        if (errors.email){
            setMessage(errors.email)
        }
        if (errs.password){
            setMessage(errors.password)
        }

        setIsSubmitting(true);
    }
     const validate =( )=> {
        let err = {}
        if(!email ){
            err.email = "email is required";
        }
        if(!password){
            err.password = " password is required";
        }

        return err;
    }
    return(
        <Layout>
            <div className={styles.topContainer}>
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
                        <form method="post" action="/api/auth/signin/email">

                            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

                            <div className={styles.form_item}>
                                <input type="text" name="email" placeholder="email"  onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div className={styles.form_item}>
                                <input type="password" name="password" placeholder="Password" id="" onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div className={styles.p_small}>
                                hai dimenticato la tua password
                            </div>
                            <div className={styles.form_item}>
                                <button type='submit' className={styles.Login_btn} onClick={(e)=> {e.preventDefault()}} >Accedi</button>
                            </div>
                            <div className={styles.p_larg}>
                                shopme , le tue marche preferite con sconti fino 70%
                            </div>
                            <div className={styles.form_item}>
                                <button className={styles.Login_btn}><Link href='/signup'>Registrarti</Link></button>
                            </div>

                            {/*<button className={styles.fb_login}>*/}
                            {/*    <div className={styles.icon}>*/}
                            {/*        <AiFillFacebook />*/}
                            {/*    </div>*/}
                            {/*    <div className={styles.btn_title}>*/}
                            {/*        continue with facebook*/}
                            {/*    </div>*/}
                            {/*</button>*/}
                            {/*<button className={styles.fb_login}>*/}
                            {/*    <div className={styles.icon}>*/}
                            {/*        <AiFillFacebook />*/}
                            {/*    </div>*/}
                            {/*    <div className={styles.btn_title}>*/}
                            {/*        continue with facebook*/}
                            {/*    </div>*/}
                            {/*</button>*/}
                        </form>
                        {Object.values(providers).map((provider) => {
                            if (provider.name === "Email") {
                                return;
                            }
                            return (
                                <button className={styles.fb_login} onClick={() => signIn(provider.id)} key={provider.name}>
                                    <div className={styles.icon}>
                                        {/*<AiFillFacebook />*/}
                                    </div>
                                    <div className={styles.btn_title}>
                                        Sign in with {provider.name}
                                    </div>
                                </button>

                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )

}
SignIn.getInitialProps = async (context) => {
    const { req, res } = context;
    const session = await getSession({ req });

    if (session && res && session.accessToken) {
        res.writeHead(302, {
            Location: "/",
        });
        res.end();
        return;
    }

    return {
        session: undefined,
        providers: await providers(context),
        csrfToken: await csrfToken(context),
    };
};