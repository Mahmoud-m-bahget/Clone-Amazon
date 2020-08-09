import React from 'react'
import "./Product.css"
import StarIcon from '@material-ui/icons/Star';
export default function Product({id , title , price , rating , image}) {
    return (
        <div className = 'product'>
            <div className = 'product_info'>
                <p>{title}</p>
                <p className="product_pric">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className = "product__rating">
                    {Array(rating)
                        .fill()
                        .map((i)=>(
                            <StarIcon/>
                        ))}
                </div>
            </div>
           <img src={image} alt = ''/>
           <button>Add to basket</button>
        </div>
    );
}
