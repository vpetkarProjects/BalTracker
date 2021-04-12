import React, { Component } from 'react'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpensesUI'
import { TransactionList } from './components/TransactionListUI'
import AddTransaction from './components/AddTransactionPage'
//import { AddTransaction } from './components/AddTransactionPage'
//import { ReadMe } from './components/ReadMe'

import { GlobalProvider } from './context/GlobalState'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <Header />
        <div className='containter'>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    )
  }
}
