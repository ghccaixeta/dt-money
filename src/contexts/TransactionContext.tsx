import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
    id: number
    description: string
    type: "income" | "outcome"
    price: number
    category: string
    created_at: string
}

interface TransactionContextType {
    transactions: Transaction[];
    loadTransactions: (query?: string) => Promise<void>;
}

interface TransactionProviderProps {
    children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function loadTransactions(query?: string) {
        
        const response = await api.get('/transactions',{
            params: {
                q: query
            }
        })

        setTransactions(response.data);
    }

    useEffect(() => {

        loadTransactions()
    }, [])

    return (
        <TransactionContext.Provider value={{ transactions, loadTransactions }}>
            {children}
        </TransactionContext.Provider>
    )
}