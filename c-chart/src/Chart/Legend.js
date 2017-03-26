import React, { PropTypes } from 'react'
import { months } from '../utils'

const Rows = ({ chartWidth, chartHeight, maxValue }) => {
  const rowStep = maxValue / 4

  const grid = []
  for (let i = 0; i < 5; i++) {
    grid.push(
      <g key={i}>
        <line
          shapeRendering='crispEdges'
          x1='0' y1={chartHeight / 4 * i}
          x2={chartWidth} y2={chartHeight / 4 * i}
        />
        <text x='-10' y={chartHeight / 4 * i} className='vertical-text'>
          {(4 - i) * rowStep}
        </text>
      </g>
    )
  }
  return <g>{grid}</g>
}
Rows.propTypes = {
  chartWidth: PropTypes.number.isRequired,
  chartHeight: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
}

const Columns = ({ chartWidth, chartHeight }) => {
  const columnWidth = chartWidth / 12
  return (
    <g>
      {months.map((month, i) => (
        <text
          key={i} className='horizontal-text'
          x={columnWidth * i + columnWidth / 2} y={chartHeight + 22}
        >{month}</text>
      ))}
      <text x='13' y='244' className='year'>2015</text>
    </g>
  )
}
Columns.propTypes = {
  chartWidth: PropTypes.number.isRequired,
  chartHeight: PropTypes.number.isRequired,
}

const Legend = ({ chartWidth, chartHeight, maxValue, ...props }) => {
  return (
    <g {...props}>
      <Rows {...{ chartWidth, chartHeight, maxValue }} />
      <Columns {...{ chartWidth, chartHeight }} />
    </g>
  )
}
Legend.propTypes = {
  chartWidth: PropTypes.number.isRequired,
  chartHeight: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
}

export default Legend
