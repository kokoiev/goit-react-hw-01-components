import PropTypes from 'prop-types';


function Statistics({ title, stats }) {
  return (
  <section className="statistics">
    {title && <h2 className="title">UPLOAD STATS</h2>}
    <ul className="stat-list">
      {stats.map(({id, label, percentage}) => <li key={id} className="item">
          <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
  </li> )}
    </ul>
    </section>)
  
 
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number}
  
}


export default Statistics