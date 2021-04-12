import React, { useContext } from 'react'
import { Transaction } from './TransactionUI'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
  const { transaction } = useContext(GlobalContext)

  return (
    <>
      <h3>Transaction History</h3>
      <ul id='list' className='list'>
        {transaction.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  )
}
