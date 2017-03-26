import React, { PropTypes } from 'react'
import withState from 'recompose/withState'
import compose from 'recompose/compose'
import pure from 'recompose/pure'
import Legend from './Legend'
import Data from './Data'
import './Chart.css'

const multitudeOf = (value, base) => Math.ceil(value / base) * base
const enhance = compose(
  pure,
  withState('tooltip', 'setTooltip', null)
)
const Chart = ({ data, tooltip, setTooltip }) => {
  const paddingLeft = 36
  const chartWidth = 804
  const width = chartWidth + paddingLeft + 3

  const paddingBottom = 55
  const paddingTop = 25
  const chartHeight = 200
  const height = paddingBottom + chartHeight + paddingTop

  const maxValue = multitudeOf(data.reduce((max, item) => (
    item.value > max ? item.value : max
  ), 0), 10)

  var options = { day: 'numeric', month: 'long' }
  const intl = new Intl.DateTimeFormat('ru-RU', options)

  const handleHintEnter = ({ x, y, data, delta }) => {
    const year = data.date.getFullYear()
    const date = intl.format(data.date)

    setTooltip({
      x,
      y,
      date: `${date} ${year}`,
      value: data.value,
      delta: delta.toFixed(2),
    })
  }

  const handleHintLeave = () => {
    setTooltip(null)
  }

  return (
    <div className='chart-container'>
      <svg {...{width, height }}>
        <g transform={`translate(${paddingLeft} ${paddingTop})`}>
          <Legend
            className='legend'
            {...{ chartWidth, chartHeight, maxValue }}
          />
          <Data
            className='data'
            {...{ data, chartWidth, chartHeight, maxValue }}
            onHintEnter={handleHintEnter}
            onHintLeave={handleHintLeave}
          />
        </g>
      </svg>
      {tooltip &&
      <div
        className='tooltip'
        style={{
          left: tooltip.x + 38,
          top: tooltip.y - 33,
        }}
      >
        <div className='date'>{tooltip.date}</div>
        <div>
          <span className='sign'>$</span>
          <span className='value'>{tooltip.value}</span>
          <span
            className={tooltip.delta > 0 ? 'up' : tooltip.delta < 0 ? 'down' : 'zero'}
          >{tooltip.delta}</span>
        </div>
      </div>
      }
    </div>
  )
}
Chart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      date: PropTypes.instanceOf(Date),
    })
  ).isRequired,
  tooltip: PropTypes.object,
  setTooltip: PropTypes.func,
}

export default enhance(Chart)
