import React, { useState } from "react";
import "./BuyerMainPage.css";

const seller = [{
    userId: 123,
    first_name: "Amy",
    last_name: "Z",
    address: "123 st",
    city: "Dallas",
    state: "TX",
    zip: 75075,
    gmail: "123@gmail.com"

}];
const items=[
    {name: "bag",
    id: 123}, 
    {name: "purse",
    id: 456}];
export default function BuyerMainPage() {
    const [search, setSearch]=useState("");
    const [searchStaus, setSearchStatus]=useState(false);
    const [searchItem, setSearchItem]=useState([]);

    function handleSearch() {
        if (search.length>0) {
            let temp = items.filter(ele=>{
                return ele.name.includes(search)
            })
            console.log(temp)
            setSearchItem(temp);
            setSearchStatus(true);
        } else {
            setSearchStatus(false);
        }
    }

    return (
        <div>
            <header>Seller Main page</header>
            <nav>
                <button>Logo</button>
                <button>feature</button>
                <button>feature</button>
                <button>feature</button>
                <button>feature</button>
                <button className="rightShift">Sign In / Sign up</button>
                <button>Cart</button>
            </nav>
            <div className="searchBar">
                <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={() => handleSearch()}>Submit</button>
            </div>
            <body>
                {searchStaus && <div>
                    {searchItem.map(ele => {
                        return <div key={Math.random()}>{ele.name}</div>
                    })}
                </div>}
                {searchStaus ||
                    <div>
                        <div className="topDeals">
                            {items.map(ele => {
                                return <div key={ele.id}>{ele.name}</div>
                            })}
                        </div>
                        <div className="featuredItem">
                            {items.map(ele => {
                                return <div key={ele.id}>{ele.name}</div>
                            })}
                        </div>
                        <div className="mainProduct">
                            {items.map(ele => {
                                return <div key={ele.id}>{ele.name}</div>
                            })}
                        </div>
                    </div>}

            </body>
            <footer>
                Copy Right
            </footer>
        </div>
    )
}