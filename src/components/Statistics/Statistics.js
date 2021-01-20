import PropTypes from 'prop-types';
import s  from "./Statistics.module.css";


function getRandomColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}


function Statistics({ title, stats }) {
  return   <section className={s.container}>
    {title && <h2 className={s.title}>UPLOAD STATS</h2>}
    <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => <li key={id} style={{ backgroundColor: getRandomColor()}} className={s.item}>
          <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
  </li> )}
    </ul>
    </section>
  
 
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf (PropTypes.shape)
  
}


export default Statistics