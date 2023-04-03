import { Link } from "@remix-run/react";

import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import HamburguerMenu from "./hamburguermenu"


  

function Navbar() {
    
  return (
    <main >
      <div className="Section test-banner"> 
        <div className="container max-width">
        <div className="banner-content">
            <div className="flex">
                <img className="icon"src="https://marchandash.com/img/warning.svg" alt="warning" />
                <p>Know the risks associated with cannabis</p>
            </div>
       
        <p>Free delivery, minimums starting at $30</p> 
        </div>
        </div>
      </div>
      <div className="container max-width navbar grid-container items-center">
        <div className="flex hamburguer-searchbar-container">
        <HamburguerMenu/>
        
<form class="flex items-center">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" style={{height:"30px"}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
    </div>
   
</form>

        </div>
      <div className="logo-nav-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163.52 15" width="216" height="16" className="logo-large hide-mobile"><path d="M0,0,3.71,4.83,7.42,9.65l3.7-4.82L14.83,0V14.84H13.14V5.31a1.66,1.66,0,0,0,0-.32l0-.32C12.31,6,11.37,7.28,10.37,8.52S8.39,11,7.42,12.3L4.7,8.76Q3.34,7,2,5.21l-.36-.54,0,.32,0,.32v9.53H0Z"></path><path d="M33.13,14.84H31.44c-.39-.93-.79-1.87-1.18-2.81s-3-7.36-3.41-8.3L24.62,9.22,23.43,12l-1.18,2.8H20.56c1.05-2.48,2.1-5,3.13-7.41L26.83,0c1.05,2.49,2.1,5,3.13,7.42Z"></path><path d="M37.87,14.84V.65h3.34a6.16,6.16,0,0,1,1.54.22,5.06,5.06,0,0,1,1.56.69,4,4,0,0,1,1.21,1.2A3.07,3.07,0,0,1,46,4.53a4.13,4.13,0,0,1-.76,2.54A3.52,3.52,0,0,1,43,8.41l3,6.45H44.24l-3-6.32H39.54v6.32ZM39.56,6.9h1.76a3.89,3.89,0,0,0,1.47-.25,2.5,2.5,0,0,0,.92-.57,2,2,0,0,0,.49-.77,2.81,2.81,0,0,0,.14-.81,1.82,1.82,0,0,0-.24-.86,2.6,2.6,0,0,0-.63-.73,3,3,0,0,0-1-.49,3.38,3.38,0,0,0-1.18-.18H39.54Z"></path><path d="M60.85,12.65,61.76,14a8.5,8.5,0,0,1-1.73.74,7.24,7.24,0,0,1-2,.27,7,7,0,0,1-2.81-.57,7.2,7.2,0,0,1-3.86-3.85,7,7,0,0,1-.57-2.82,7.11,7.11,0,0,1,.59-2.83A7.18,7.18,0,0,1,53,2.63a7.3,7.3,0,0,1,2.29-1.55A6.77,6.77,0,0,1,58.07.5a6.86,6.86,0,0,1,2,.26,7.55,7.55,0,0,1,1.76.74c-.15.25-.31.46-.47.68s-.32.45-.46.68a5.89,5.89,0,0,0-1.32-.56,5.15,5.15,0,0,0-1.46-.21,5.37,5.37,0,0,0-2.17.45,5.67,5.67,0,0,0-1.76,1.22,6,6,0,0,0-1.21,1.82,5.65,5.65,0,0,0,1.21,6.17A5.91,5.91,0,0,0,55.91,13a5.21,5.21,0,0,0,2.17.45A5.41,5.41,0,0,0,60.85,12.65Z"></path><path d="M67.11,14.84V.65H68.8V6.9h7.66V.65h1.69V14.84H76.46V8.49H68.79v6.35Z"></path><path d="M133.56,14.83h-1.69c-.39-.93-.79-1.86-1.18-2.8s-3-7.37-3.41-8.3l-2.23,5.49L123.86,12l-1.18,2.8H121c1.05-2.48,2.1-5,3.13-7.41S126.2,2.49,127.26,0c1,2.49,2.1,5,3.13,7.42Z"></path><path d="M146.22,2.05l-.48.6c-.16.21-.31.41-.48.61a3.65,3.65,0,0,0-.43-.35,3.21,3.21,0,0,0-.59-.36,5.17,5.17,0,0,0-.75-.27,3.79,3.79,0,0,0-.88-.11,2.16,2.16,0,0,0-1.75.67,2.33,2.33,0,0,0-.55,1.58,1.66,1.66,0,0,0,.7,1.43,3.44,3.44,0,0,0,.7.4c.27.11.54.21.83.3.44.16.92.35,1.44.58a6.28,6.28,0,0,1,1.43.85,4.56,4.56,0,0,1,1.1,1.26,3.58,3.58,0,0,1,.43,1.81,3.88,3.88,0,0,1-.33,1.64,4,4,0,0,1-.91,1.25,4.17,4.17,0,0,1-1.35.79,5,5,0,0,1-1.62.27,5.43,5.43,0,0,1-1.5-.21,6.51,6.51,0,0,1-1.34-.55,6.66,6.66,0,0,1-1.08-.74,3.55,3.55,0,0,1-.74-.81l1.05-1a7,7,0,0,0,.63.59,5.53,5.53,0,0,0,.79.58,4.61,4.61,0,0,0,.93.43,3.75,3.75,0,0,0,1.1.16,3.48,3.48,0,0,0,1-.15,2.83,2.83,0,0,0,.86-.45,2.16,2.16,0,0,0,.6-.74,2.27,2.27,0,0,0,.22-1,2.14,2.14,0,0,0-.39-1.32,3.54,3.54,0,0,0-1-.84,6.48,6.48,0,0,0-1.2-.54c-.42-.13-.79-.26-1.1-.38a9.36,9.36,0,0,1-.87-.39,4,4,0,0,1-1-.65,3.59,3.59,0,0,1-.78-1,3.45,3.45,0,0,1-.35-1.51A4,4,0,0,1,138.83,3a3.29,3.29,0,0,1,.66-1.22,3.42,3.42,0,0,1,1.24-.89A4.62,4.62,0,0,1,142.6.56a5.34,5.34,0,0,1,1.68.29A5.9,5.9,0,0,1,146.22,2.05Z"></path><path d="M152.48,14.83V.65h1.69V6.89h7.66V.65h1.69V14.83h-1.69V8.49h-7.66v6.34Z"></path><path d="M94.59,11.29h-.87l-.61-1.45L91.35,5.55,90.2,8.39c-.21.48-.41,1-.62,1.45L89,11.28H88.1l1.62-3.83,1.63-3.83L93,7.45Z"></path><path d="M103.88,4v7.66L101.2,8.77,98.52,5.93a.71.71,0,0,0-.1-.14l-.09-.14a1,1,0,0,0,0,.17.5.5,0,0,0,0,.17v5.3h-.88V3.62l2.68,2.91,2.68,2.89.1.14.1.13s0-.11,0-.17a.88.88,0,0,0,0-.16V4Z"></path><path d="M106.81,4h1.7a3.88,3.88,0,0,1,1.43.25,3.69,3.69,0,0,1,1.17.74,3.42,3.42,0,0,1,.79,1.16,4,4,0,0,1,.3,1.52A4.24,4.24,0,0,1,112,8.9a3.19,3.19,0,0,1-.69,1.18,3.63,3.63,0,0,1-1.26.86,4.45,4.45,0,0,1-1.87.35h-1.35Zm.86.82v5.67h.73a3.48,3.48,0,0,0,1.15-.2,2.88,2.88,0,0,0,.93-.57,2.72,2.72,0,0,0,.61-.89,3.15,3.15,0,0,0,0-2.34,2.76,2.76,0,0,0-.61-.9,2.88,2.88,0,0,0-.93-.57,3.48,3.48,0,0,0-1.15-.2Z"></path><rect x="85.33" y="1.21" width="29.65" height="0.88"></rect><rect x="85.33" y="12.91" width="29.65" height="0.88"></rect></svg>
      </div>
 
    <div className="delivery-nav-container flex" >
      <div className="flex" style={{marginRight:"16px"}}>
        <div>
        <p>Delivery</p>
        <p style={{fontWeight:600}}>Select address</p>
        </div>
        <div>
        <svg class="store-toggle__arrow" width="14" height="14" focusable="false" viewBox="3 3 18 18"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
        </div>
      </div>
      <div>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="18" height="18"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
        </button>
      </div>
   

      </div>
      </div>
    </main>
  );
}


export default Navbar;
