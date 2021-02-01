import Layout from "../../components/layout/Layout";
import styles from './Products.module.css'
import {useEffect, useState} from "react";
import Link from 'next/link'
import calcSale from "../../seeds/calcSale";

export default  function ({countries}){
    const [sale , setSale ] = useState(true)
    const randomSale = Math.floor(Math.random()*100)
    return(
        <Layout>
            <div className={styles.container}>
                <div className={styles.head}>
                    <img src="https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>

                </div>
                <div className={styles.top_filter}>

                    <div>link</div>
                    <div>
                        <select name="" id="">
                            <option value="">Ordina per</option>
                            <option value="">prezzo crescante</option>
                            <option value="">prezzo decrescante</option>

                        </select>
                        <select name="" id="">
                            <option value="">size</option>
                            <option value="">s</option>
                            <option value="">m</option>
                            <option value="">l</option>
                            <option value="">xl</option>
                        </select>                    </div>

                </div>
                <div className={styles.main}>
                    <div className={styles.left_filter}>
                        <ul>
                            {countries && countries.map(country =>{
                                    return <li>{country.region}</li>
                                }


                            )}

                        </ul>


                    </div>
                    <div className={styles.items}>
                        {countries && countries.map(country => {
                           return (
                               <Link href={`/products/${country.alpha3Code}`}>
                                   <div className={styles.item}>
                                       <div className={styles.item_img}>
                                           <img src={country.flag} alt=""/>

                                       </div>
                                       <div className={styles.item_desc}>
                                           <div className={styles.item_title}>
                                               <div className={styles.item_name}>
                                                   {country.name}
                                               </div>
                                               <div className={styles.item_price}>
                                                   <div className={styles.f_price}>{country.area} $</div>  <div className={styles.n_price}>{calcSale(country.area , randomSale)}$</div> {sale  && <div className={styles.sale}>{randomSale}  %</div>}
                                               </div>
                                           </div>
                                           <div className={styles.item_size_color}>
                                               <select name="" id="">
                                                   <option value="#" >color</option>
                                                   {country.borders.map(bo =>(
                                                       <option value={bo}>{bo}</option>
                                                   ))}
                                               </select>
                                               <select name="" id="">
                                                   <option value="#" >Size</option>
                                                   {country.altSpellings.map(bo =>(
                                                       <option value={bo}>{bo}</option>
                                                   ))}
                                               </select>

                                           </div>
                                           <div className={styles.item_more}>
                                               <div className={styles.small}>
                                                   per saperne di piú
                                               </div>
                                               <div className={styles.button}>
                                                   <Link href='#'><a className={styles.more_btn}>Acquisto</a></Link>
                                               </div>
                                           </div>

                                       </div>


                                   </div>
                               </Link>

                           )
                        })}
                    </div>

                </div>

            </div>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/all")
    const countries = await res.json();
    const paths = countries.map((country) => ({
        params: { id: country.alpha3Code },
    }))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/all")
    const countries = await res.json();
    return {
        props: {
            countries
        }
    }
}
