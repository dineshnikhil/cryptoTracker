import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className="card">
            <p className="coin-rank">{props.data.market_cap_rank}</p>
            <p className="coin-name"> <img src={props.data.image} alt="crypto-coin-img" /> {props.data.name} ( {props.data.symbol} )</p>
            <p>{props.data.current_price.toLocaleString("en-In")}</p>

            {/* conditinal renderning. */}
            <p className={props.data.price_change_percentage_24h > 0 ? "green" : "red"}>{props.data.price_change_percentage_24h.toFixed(2)} %</p>

            <p>{props.data.total_volume.toLocaleString("en-In")}</p>
            <p>{props.data.market_cap.toLocaleString("en-In")}</p>
        </div>
    )
}

export default Card;
