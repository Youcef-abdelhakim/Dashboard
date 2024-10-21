import React, { useEffect } from "react";
import Product from "../productid/productId.js";

const Home = ({categories, perfumes}) => {

    useEffect(() =>{
        const mapeddata = new Map();
        categories.forEach(categorie => {
            mapeddata.set(categorie, perfumes.filter(p => p.categorie === categorie));
        })
        console.log(mapeddata);
    },[])


    return(
        <section className="home-page">
            <div className="title">
                <h1><span>Welcom</span> Admin</h1>
            </div>
            <div className="product-continer">
                {
                    categories.map(cat => (
                        <div className="category" key={cat}>
                            <div className="cattitle">
                                <h2>{cat}</h2>
                            </div>
                            <div className="prfs">
                                {perfumes.filter(prf =>prf.category === cat).map(prf =>(
                                    <Product key={`${cat}_${prf.name}`} perfume= {prf}/>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
export default Home;