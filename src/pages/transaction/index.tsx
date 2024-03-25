import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactinTable, TransactionContainer } from "./styles";

interface Transaction {
    id: number
    description: string
    type: "income" | "outcome"
    price: number
    category: string
    created_at: string
}

export function Transactions() {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function loadTransactions() {
        const response = await fetch('http://localhost:3000/transactions');
        const data = await response.json();

        setTransactions(data);
    }

    useEffect(() => {

        loadTransactions()
    }, [])

    return (
        <div>
            <Header />
            <Summary />
            <TransactionContainer>
                <SearchForm />
                <TransactinTable>
                    <tbody>

                        {
                            transactions.map((t) => {
                                return (
                                    <tr key={t.id}>
                                        <td width="50%">
                                            {t.description}
                                        </td>
                                        <td>
                                            <PriceHighlight variant={t.type}>
                                                {`$ ${t.price}`}

                                            </PriceHighlight>
                                        </td>
                                        <td>{t.category}</td>
                                        <td>{t.created_at}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </TransactinTable>

            </TransactionContainer>
        </div>
    )
}