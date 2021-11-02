import React, { useState, useEffect } from 'react';
import Card from '../ui/Card';
import './Home.css'

function Home() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    // Search change handler.
    const searchChangeHandler = e => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        // fetching the data about crypto from api link.
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(response => {
            return response.json();
        }).then(data => {
            setCoins(data)
        })
    }, [])

    // filtering the coins on the bases of search.
    const filteredCoins = coins.filter(coin => {
        return coin.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <React.Fragment>
            <div className="coin-search">
                <h2>Search for a crypto Coin</h2>
                <form>
                    <i className="fas fa-search"></i>
                    <input type="text" id="coin" autoComplete="off" onChange={searchChangeHandler} />
                </form>
            </div>
            <div className="card-head">
                <p id="rank">#</p>
                <p>Coin ( Symbol )</p>
                <p>Current Price</p>
                <p>24h</p>
                <p>24h Volume</p>
                <p>Mkt Cap</p>
            </div>
            <div>
                {filteredCoins.map((data) => {
                    return <Card key={data.id} data={data} />
                })}
            </div>
        </React.Fragment>
    )
}

export default Home;
