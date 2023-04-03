import { Link } from "@remix-run/react";

import React from "react";

function CreateProductCard(product) {
    return (
      <ProductCard
        key={product.id}
        name={product.name}
        imgURL={product.imgURL}
        productDetailTitle={product.productDetailTitle}
        type={product.type}
        price={product.price}
        thc={product.thc}
        perPrice={product.perPrice}
      />
    );
  }
  
function ProductCard(props){
    return(
    <div className="product-card">
    <div className="product-card-img-container">
    <img className="product-listing-img"  src={props.imgURL} alt="" />
    <div></div>
    <div className="product-card-hr"></div>
    </div>
    <div className="item-center-column">
        <h3>{props.name}</h3>
        <p>{props.productDetailTitle}</p>
        <div className="flex">

            <h3>${props.price}</h3>
            <p> {props.perPrice}</p>
        </div>
        <div className="flex">
            <p className="product-type">{props.type}</p>
            <p>THC {props.thc}</p>
        </div>
    </div>
</div>
)
}

function ProductListing(props) {
    
  return (
    <main  >
        <div className="space"> 
       <h2 className="boxes-featured__box-title space">{props.name}</h2>
       <p className="space">{props.teaser}</p>

       <div className="product-listing-grid">
       {props.products.map(CreateProductCard)}
       </div>
       </div>
       <div  className="item-center-column space">
        <button className="shop-all-btn">Shop All {props.name}</button>
       </div>
       <hr />

    </main>
  );
}


export default ProductListing;
