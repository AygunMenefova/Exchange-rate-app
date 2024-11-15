import React, { useState } from 'react'
import '../css/Currency.css'
import { LuArrowBigRight } from "react-icons/lu";
import axios from 'axios'

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_Zyj1CGlfZGN9KudZ2Lvbl0oT39ZYcYYiH51ElJ4l"

function Currency() {

    const [amount, setAmount] = useState(0)
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('TRY')
    const [result, setResult] = useState(0)

    const exchange = async () => {

        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);

}
return (
    <div className='currency-div'>

        <div style={{ width: '100%', textAlign: 'center', backgroundColor: 'rgb(3, 3, 78)', color: 'whitesmoke', borderRadius: '5px', border: '1px solid #fff' }}>
            <h3>EXCHANGE RATE</h3>
        </div>

        <div style={{ marginTop: '50px' }}>
            <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number" className='amount' />

            <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option' >
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
            </select>
            <LuArrowBigRight  className='icon' />
            <select onChange={(e) => setToCurrency(e.target.value)} className='from-currency-option' >
                <option>TRY</option>
                <option>USD</option>
                <option>EUR</option>
            </select>

            <input
                value={result}
                onChange={(e) => setResult(e.target.value)}
                type="number" className='result' />
        </div>

        <div>
            <button onClick={exchange} className='btn'>Change</button>
        </div>

    </div>
)
}

export default Currency