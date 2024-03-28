import { ReactNode, createContext, useEffect, useState } from "react";

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
        
        const url = new URL('http://localhost:3000/transactions');

        if(query){
            url.searchParams.append('q', query);
        }

        const response = await fetch(url);
        const data = await response.json();

        setTransactions(data);
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