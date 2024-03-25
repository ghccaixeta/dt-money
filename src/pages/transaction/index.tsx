import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactinTable, TransactionContainer } from "./styles";
import { TransactionContext } from "../../contexts/TransactionContext";
import { useContext } from "react";



export function Transactions() {

    const { transactions } = useContext(TransactionContext)

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