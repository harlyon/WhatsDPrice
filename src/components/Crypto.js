import React, { Component } from 'react';
import axios from 'axios';
import './Crypto.css';
// import CryptoItems from './CryptoItems';

class Crypto extends Component {

    state = {
        cryptos: []
    }


    componentDidMount() {
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR')
          .then(res => {
            const cryptos = res.data;
            console.log(cryptos);
            this.setState({cryptos: cryptos});
          })
      }

      render() {
        return (
          <div className="App">
            {Object.keys(this.state.cryptos).map((key, i) => (
              <div id="crypto-container" key={i}>
                <span className="left">{key}</span>
                <span className="right">USD :{this.state.cryptos[key].USD} <br /> EURO :{this.state.cryptos[key].EUR}</span>
              </div>
            ))}
          </div>
        )
      }
}

export default Crypto;