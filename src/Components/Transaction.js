import React, { useContext } from 'react'
import { Globalcontext } from '../Context/GlobalState';

function Transaction({transaction}) {
const {deletetransactions} = useContext(Globalcontext)

  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <div>
    <li className={transaction.amount < 0 ? "minus" : "plus"}> 
    {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button
    onClick={()=>deletetransactions(transaction.id)} className="delete-btn">x</button>
   </li>
   </div>
  )
}

export default Transaction