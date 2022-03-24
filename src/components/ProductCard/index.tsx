import React from 'react';
import { ProductCardprops } from './interface';
import "./style.css";

export const ProductCard: React.FC<ProductCardprops> = ({name, url}) => {
return(
    <div className="product-card-container">
        <div style={{backgroundImage: `url(${url})`}} className="product-image" />
        <p>{name}</p>
        </div>
)
}