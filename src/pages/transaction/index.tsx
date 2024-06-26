import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { PriceHighlight, TransactinTable, TransactionContainer } from './styles'
import { TransactionContext } from '../../contexts/TransactionContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'

export function Transactions() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactinTable>
          <tbody>
            {transactions.map((t) => {
              return (
                <tr key={t.id}>
                  <td width="50%">{t.description}</td>
                  <td>
                    <PriceHighlight variant={t.type}>
                      {t.type === 'outcome' && '-'}
                      {priceFormatter.format(t.price)}
                    </PriceHighlight>
                  </td>
                  <td>{t.category}</td>
                  <td>{dateFormatter.format(new Date(t.created_at!))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactinTable>
      </TransactionContainer>
    </div>
  )
}
