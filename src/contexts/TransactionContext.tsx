import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Transaction {
  id?: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  created_at?: string
}

interface TransactionContextType {
  transactions: Transaction[]
  loadTransactions: (query?: string) => Promise<void>
  createTransaction: (transaction: Transaction) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function createTransaction(transaction: Transaction) {
    const { description, price, category, type } = transaction

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      created_at: new Date(),
    })

    setTransactions((state) => [...state, response.data])
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionContext.Provider
      value={{ transactions, loadTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
