import React, { PropTypes } from 'react'
import Hints from './Hints'

const Data = ({
  data, chartWidth, chartHeight, maxValue, onHintEnter, onHintLeave, ...props
}) => {
  const dateFrom = new Date(2015, 0, 1)
  const dateTo = new Date(2015, 0, 365)
  const dateDelta = dateTo - dateFrom

  const points = data.map((entry, i) => {
    const x = Math.round((entry.date - dateFrom) / dateDelta * chartWidth)
    const y = chartHeight - (entry.value / maxValue) * chartHeight
    let delta = 0
    if (i > 0) {
      const prevValue = data[i - 1].value
      delta = (entry.value - prevValue) / prevValue * 100
    }
    return { x, y, data: entry, delta }
  })
  const pointsString = points
    .map(point => `${point.x},${point.y}`)
    .join(' ')

  return (
    <g>
      <polyline {...props} fill='none' points={pointsString} />
      {points.map((point, i) => (
        <Hints
          key={i}
          {...{ point, chartHeight }}
          onEnter={onHintEnter} onLeave={onHintLeave}
        />
      ))}
    </g>
  )
}
Data.propTypes = {
  data: PropTypes.array.isRequired,
  chartWidth: PropTypes.number.isRequired,
  chartHeight: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  onHintEnter: PropTypes.func,
  onHintLeave: PropTypes.func,
}

export default Data
