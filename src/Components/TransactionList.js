import React, { useContext } from 'react'
import { Globalcontext } from '../Context/GlobalState'
import Transaction from './Transaction';

export const TransactionList =()=> {
    const{ transactions } = useContext(Globalcontext);

    console.log();

  return (
    <>
     <h3>History</h3>
    <ul  className="list">
    {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />  ))}
    </ul>
    </>
  )
}

export default TransactionList