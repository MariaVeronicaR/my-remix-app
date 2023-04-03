import { Link } from "@remix-run/react";
import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import ButtonLanding from "./buttons-landing"
import NewsSection from "./news-section";
import DeliveryServices from "./deliveryservices";
import ProductListing from "./productlisting";
import {Data, TopSellers} from "./data";

function Landing() {

  return (
    <main >
     
    <div>
      <div className="container max-width">

      
      < ButtonLanding />
      <NewsSection/>
      <hr></hr>
      <DeliveryServices/>
      <hr></hr>
      <ProductListing name={Data.name} teaser={Data.teaser} products={Data.products}/>
      <ProductListing name={TopSellers.name} teaser={TopSellers.teaser} products={TopSellers.products}/>
      </div>
    </div>

       
    </main>
  );
}


export default Landing;
