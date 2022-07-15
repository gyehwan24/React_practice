import { useEffect, useState } from "react";

function CoinApp() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState("");
  const [howManyCoin, setHowManyCoin] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const onChange = (event) => {
    setMyMoney(event.target.value);
  };
  const showCoin = (event) => {
    setHowManyCoin(myMoney / event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins~! {loading ? "" : `(${coins.length})`}</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={myMoney}
          placeholder="Write your money(USD)"
          onChange={onChange}
        />
      </form>
      {loading ? (
        <stong>Loading...</stong>
      ) : (
        <select onChange={showCoin}>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <hr />
      {howManyCoin === "" && myMoney === "" ? "" : `${howManyCoin}개 구매 가능`}
    </div>
  );
}

export default CoinApp;
