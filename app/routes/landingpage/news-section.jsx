import { Link } from "@remix-run/react";

import React from "react";
  

function NewsSection() {
    
  return (
    <main className="grid-news space">
        <div className="item-big">
            <img className="space news-img" src="https://images.ctfassets.net/xbsmk44vd3qp/2j6OMhZ24GzF65X7N7fKK2/549ba7310cff1ebb560c72a752f4f3d2/710_labs_concentrates.jpeg?w=1100&h=499&q=50&fm=webp" alt="" />
            <h2 className="boxes-featured__box-title space">710 labs</h2>
            <p>710 Labs utilizes unique genetics and extraction techniques to produce award-winning concentrates, flower, edibles and more.</p>
        </div>
        <div className="item-small ">
            <img className="space news-img" src="https://images.ctfassets.net/xbsmk44vd3qp/4Z1EpseciJHY0qUL0rjG31/9a3de892651f22b49b9712c9145bfdf2/Connected_Homepage_banner_1100x500.jpeg?w=1100&h=499&q=50&fm=webp" alt="" />
            <h2 className="boxes-featured__box-title space">Connected</h2>
            <p>Discover fresh drops from Connected, the original #designerweed. Shop Connected</p>
        </div>
        <div className="item-small-2">
            <img className="space news-img" src="https://images.ctfassets.net/xbsmk44vd3qp/5jUpC7XRx0Lle0rEYUrAOc/c9ecdf090111f7d29cff848a16066984/Cru_homepage_banner.jpeg?w=1100&h=499&q=50&fm=webp" alt="" />
            <h2 className="boxes-featured__box-title space">CRU Cannabis</h2>
            <p>CRU is a premium artisanal indoor flower brand that sources exclusive genetics & exotic strains for 1/8ths, pre-rolls, vapes & more. Shop CRU</p>
        </div>
        <div className="item-big-2">
            <img className="space news-img" src="https://images.ctfassets.net/xbsmk44vd3qp/1dzOLe7l9ezzog4het8m8l/720ef86b3e8f2106a7297fe0153efea1/kurvana-march-and-ash-assets1100x500.jpg?w=1100&h=499&q=50&fm=webp" alt="" />
            <h2 className="boxes-featured__box-title space">Kurvana Cartridges & DVP</h2>
            <p>Kurvana uses highly sought after indica, hybrid, and sativa cannabis strain combinations that have incredible flavor profiles. Shop Kurvana</p>
        </div>
    </main>
  );
}


export default NewsSection;
