import React from "react";
import {Link} from 'react-router-dom';
const Product = ({perfume, handleCallback}) =>{

    return(
        <div className="prod-card">
            <div className="prod-picture">
                <img src={perfume.image} alt="Sorry iage is not available at this time revisit us later"/>
                <h4>{perfume.name}</h4>
                <h5>{perfume.brand}</h5>
                <h5 className="price">{perfume.price}£</h5>
                <p>Quantity: {perfume.Quantity}</p>
                <Link to='/modify' onClick={handleCallback} className="modify">Modify</Link>
            </div>
        </div>
    );
}

export default Product;