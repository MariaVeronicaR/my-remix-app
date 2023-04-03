import { Link } from "@remix-run/react";

import React from "react";
  

function DeliveryServices() {
    
  return (
    <main className="grid-container service-promo-banner" >
        <div className="item-center-column">
            <svg class="service-promo-banner__icon service-promo-banner__icon--small space" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.64 12"><path d="M35.4,10.67c1.22,0,2-.17,2.12-1.1.22-1.51.12-2.37-.33-2.57-.14-.07-.11,0-.13-.17a3.22,3.22,0,0,0-.42-1.53c-1.41-1.08-4.64-1.75-10-2a.51.51,0,0,1-.37-.11A19,19,0,0,0,16.16,0,24.64,24.64,0,0,0,4.51,2.53a.55.55,0,0,1-.35.1l-2.27.24a1,1,0,0,0-.82.42A8.11,8.11,0,0,0,.64,5.76c0,.14,0,.16-.12.19C0,6.07,0,6.66,0,7.11c0,1.44.35,2,1.28,2.21l2.46.5A.28.28,0,0,0,4,9.58V9.36a3.23,3.23,0,0,1,6.45,0v.76a.33.33,0,0,0,.29.3l17.6.21a.33.33,0,0,0,.3-.29v-1a3.23,3.23,0,0,1,6.45,0v1a.32.32,0,0,0,.28.28Zm-11.78-8h.22a14.7,14.7,0,0,0-8.5-2,.3.3,0,0,0-.26.3L15.3,3a.37.37,0,0,0,.32.3l8.05.41-.17-.09c-.18-.1-.23-.14-.24-.36s0-.64.36-.64ZM7.25,6.72A2.64,2.64,0,1,1,4.61,9.36,2.64,2.64,0,0,1,7.25,6.72Zm0,1.17a1.47,1.47,0,1,1,0,2.94,1.47,1.47,0,0,1,0-2.94ZM31.89,6.72a2.64,2.64,0,1,1-2.64,2.64,2.64,2.64,0,0,1,2.64-2.64Zm0,1.17a1.47,1.47,0,0,1,0,2.94,1.47,1.47,0,0,1,0-2.94ZM14,3.22a.31.31,0,0,0,.28-.28l0-2A.34.34,0,0,0,14,.66,19.29,19.29,0,0,0,8.13,1.79c-.57.27-.74.51-.12.77A6.16,6.16,0,0,0,10.1,3Z"></path></svg>
            <h3>Free Delivery</h3>
            <p>Order minimums starting at only $30</p>
        </div>
        <div  className="item-center-column">
            <svg class="service-promo-banner__icon space" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.48 15"><path d="M11.39,3.53a.12.12,0,0,0-.12-.11H9.2a.28.28,0,0,0,0-.13v-1A2.29,2.29,0,0,0,6.87,0H5.61A2.3,2.3,0,0,0,4,.67a2.27,2.27,0,0,0-.67,1.62v1a.24.24,0,0,0,0,.14H1.12A.13.13,0,0,0,1,3.53L0,14.87A.08.08,0,0,0,0,15a.09.09,0,0,0,.08,0H12.36a.11.11,0,0,0,.09,0,.12.12,0,0,0,0-.09ZM4.15,3.42a.28.28,0,0,0,0-.13v-1a1.48,1.48,0,0,1,.44-1A1.51,1.51,0,0,1,5.61.8H6.87a1.48,1.48,0,0,1,1,.44,1.44,1.44,0,0,1,.44,1.05v1a.28.28,0,0,0,0,.13Z"></path></svg>
            <h3>Curbside Pickup</h3>
            <p>Available at select locations</p>
        </div>
        <div  className="item-center-column">
        <svg class="service-promo-banner__icon space" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.34 15"><polygon points="6.41 15 0 8.59 2.07 6.53 6.41 10.86 17.27 0 19.34 2.07 6.41 15"></polygon></svg>
            <h3>Speedy Service</h3>
            <p>Average delivery time around 45 minutes or less!</p>
        </div>
       
       
    </main>
  );
}


export default DeliveryServices;
