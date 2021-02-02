import {useState,useEffect} from "react";
import Layout from "../../../components/layout/Layout";
import styles from './Product.module.css'
import calcSale from "../../../seeds/calcSale";
import Link from "next/link";
const getCountry = async (id) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`)
    const country = await res.json();
    return country;
}




export default function ({country}){
    const [sale , setSale ] = useState(true)
    const randomSale = Math.floor(Math.random()*100)
    const [borders, setBorders] = useState([]);
    const getBorders = async () => {
        const borders = await Promise.all(country.borders.map((border) => getCountry(border)));
        setBorders(borders)

    }
    useEffect(() => {
        getBorders();

    }, [])
    const handleShowMe =(e)=> {
        const big = document.getElementById("big_photo")
        big.src = e.target.src
    }

    return(
        <Layout>
            <div className={styles.container}>
                <div className={styles.top_bar}>
                    <a  className={styles.back}>   <Link href="/products">Indietro </Link></a>
                    <div className={styles.my_place}>
                        <Link href='/products' >Products</Link>/{country.name}
                    </div>
                </div>
                <div className={styles.grid_content}>
                    <div className={styles.product_img}>
                        <div className={styles.big_img}>
                            <img src={country.flag} alt="" id='big_photo'/>
                        </div>

                        <div className={styles.borders}>
                            {borders.map(({ flag, name, alpha3Code }) => (
                                    <div >
                                        <div className={styles.border_img}> <img src={flag} alt="" onClick={handleShowMe} /></div>
                                    </div>

                            ))}
                        </div>

                    </div>
                    <div className={styles.product_desc}>
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
                        <div className={styles.action}>
                            <select name="" id="">
                                <option value="#">qty</option>
                                <option value="">1</option>
                                <option value="">2</option>
                            </select>
                            <div>
                                <button>Aggiungi al carrello </button>
                            </div>

                        </div>
                    </div>


                </div>
                <div className={styles.product_des_bottom}>
                    <div className={styles.head_bottom}>
                        Dettagli del prodotto

                    </div>
                    <div>
                        <ul>
                            <li>Il prezzo di riferimento qui indicato corrisponde al prezzo di listino al pubblico e indica il prezzo consigliato dal produttore o fornitore relativamente ai prodotti oggetto di questa vendita-evento. Tuttavia potrebbe accadere che in alcuni punti vendita gli stessi prodotti siano messi in vendita a prezzi differenti, anche inferiori</li>
                        </ul>
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

export const getStaticProps = async ({ params }) => {

    const country = await getCountry(params.id);

    return {
        props: {
            country,
        }
    }
}