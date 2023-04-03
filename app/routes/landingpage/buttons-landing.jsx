import { Link } from "@remix-run/react";

import React from "react";
  

function ButtonLanding() {
    
  return (
    <main className="grid-container space" >
        <div className="flex button-bg-gray">
        <div className="flex padding-15">
        <div>
            <p>TODAY'S DEALS</p>
        </div>
        <div><svg stroke="currentColor" viewBox="0 0 24 24" style={{ width: "1.5rem", marginLeft: "0.5rem" }}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></div>
        </div>

        <img  style={{ opacity:"30%"}} src="https://images.ctfassets.net/xbsmk44vd3qp/PrwWaj1wEMeXAWYjfq56L/2da9e5f7991ede0ca25fc5796bb5a2db/anncmnt_beige02.png?w=144&h=53&q=30&fm=webp" alt="" />    
        </div>   
        <div className="flex button-bg-gray">
        <div className="flex padding-15">
        <div>
            <p>FRESH DROPS</p>
        </div>
        <div><svg stroke="currentColor" viewBox="0 0 24 24" style={{ width: "1.5rem", marginLeft: "0.5rem" }}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></div>
        </div>

        <img  style={{ opacity:"30%"}} src="https://images.ctfassets.net/xbsmk44vd3qp/7qDSzNJJSZ0TdmkUoWSwcp/f177865105a109beb398571ee204602f/anncmnt_brwn02.png?w=144&h=53&q=30&fm=webp" alt="" />    
        </div>  
        <div className="flex button-bg-gray">
        <div className="flex padding-15">
        <div>
            <p>FAQ</p>
        </div>
        <div><svg stroke="currentColor" viewBox="0 0 24 24" style={{ width: "1.5rem", marginLeft: "0.5rem" }}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></div>
        </div>

        <img  style={{ opacity:"30%"}} src="https://images.ctfassets.net/xbsmk44vd3qp/7DbjJaEUtGTkdg9QZC43xm/624f771d2077aa08e1a874778c3bfb01/anncmnt_grn02.png?w=144&h=53&q=30&fm=webp" alt="" />    
        </div>   
    </main>
  );
}


export default ButtonLanding;
