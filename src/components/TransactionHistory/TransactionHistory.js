import { TransactionTable, TransactionTd, TransactionTh } from "./TransactionHistory.styled"
import PropTypes from "prop-types"


export const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
        <thead>
            <tr>
            <TransactionTh>Type</TransactionTh>
            <TransactionTh>Amount</TransactionTh>
            <TransactionTh>Currency</TransactionTh>
            </tr>
        </thead>
            
            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return(
                    <tr key={id}>
                        <TransactionTd>{type}</TransactionTd>
                        <TransactionTd>{amount}</TransactionTd>
                        <TransactionTd>{currency}</TransactionTd>
                    </tr>)
                })}
            </tbody>
        </TransactionTable>
    )
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency:PropTypes.string.isRequired,
        }),
    ),
}