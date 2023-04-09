import React, { useState, useEffect } from 'react';

function Top() {
    const [cryptoArr, setCryptoArr] = useState([]);

    useEffect(() => {
        const fetchFun = async () => {
            let respons = await fetch("https://api.coinlore.net/api/tickers/");
            const data = await respons.json();
            console.log(data);
            let neData = data.data.splice(0, 10);
            //console.log(neData);
            setCryptoArr([...neData]);
        };
        fetchFun();
    }, [])

    return (
        <div className='top-container'>
            <h1>Top 10 Global Crypto Coins</h1>
            <div className='display-container'>

                {cryptoArr.map((ele, ind) => {

                    return (<div key={ind} className='coin-container'>
                        <p className='rank-para'>Rank #{ele.rank}</p>
                        <h3 className='coin-symbol'>{ele.name} ({ele.symbol})</h3>
                        <p className='price-para'>Price: {ele.price_usd}</p>
                    </div>)
                })}




            </div>
        </div>
    )
}

export default Top