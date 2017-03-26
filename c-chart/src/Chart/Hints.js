import React, { PropTypes } from 'react'
import withState from 'recompose/withState'
import compose from 'recompose/compose'
import pure from 'recompose/pure'

const enhance = compose(
  pure,
  withState('hovered', 'setHovered', false)
)
const Hints = ({ point, chartHeight, hovered, setHovered, onEnter, onLeave }) => {
  const handleMouseEnter = () => {
    setHovered(true)
    onEnter(point)
  }

  const handleMouseLeave = () => {
    setHovered(false)
    onLeave(point)
  }

  return (
    <g
      className='hint'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <line
        shapeRendering='crispEdges'
        className='line'
        style={{ display: hovered ? 'block' : 'none' }}
        x1={point.x} y1={point.y}
        x2={point.x} y2={chartHeight}
      />
      <line
        style={{ cursor: 'hand' }}
        stroke='transparent'
        strokeWidth={9}
        x1={point.x} y1={point.y}
        x2={point.x} y2={chartHeight}
      />
      <circle
        className={hovered ? 'dot' : 'hidden'}
        cx={point.x} cy={point.y} r='3.5'
      />
    </g>
  )
}
Hints.propTypes = {
  point: PropTypes.object.isRequired,
  chartHeight: PropTypes.number.isRequired,
  hovered: PropTypes.bool,
  setHovered: PropTypes.func,
  onEnter: PropTypes.func,
  onLeave: PropTypes.func,
}

export default enhance(Hints)
