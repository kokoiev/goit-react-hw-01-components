import PropTypes from 'prop-types';
import s from "./TransactionHistory.module.css"
function TransactionHistory({ transactions }) {
    return <table className={s.container}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
            {transactions.map(({ id, type, amount, currency }) => <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>)}       
  </tbody>
</table>
    
}
TransactionHistory.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string

}
export default TransactionHistory