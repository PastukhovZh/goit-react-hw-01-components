import { StatisticsWrap, Title, StatsList, StatsItem } from "./Statistics.styled"
import PropTypes from "prop-types"

export const Statistics = ({title, stats}) => {
    return (
        <StatisticsWrap>
           {title && <Title>{title}</Title>} 
  <StatsList>
        {stats.map(({ id, label, percentage }) =>(
            <StatsItem key = {id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatsItem>
         ))}
  </StatsList>
</StatisticsWrap>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}