import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactinTable, TransactionContainer } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionContainer>
                <SearchForm />
                <TransactinTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de Site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 12.000,00

                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>20/03/2024</td>
                        </tr>
                        <tr>
                            <td width="50%">Café da manhã</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    - R$ 20,00
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>19/03/2024</td>
                        </tr>
                    </tbody>
                </TransactinTable>

            </TransactionContainer>
        </div>
    )
}