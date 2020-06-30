import React from 'react'
import ScatterChart from 'ChartTable/ScatterChart'
import { labels } from 'data'
const { rawFilters } = labels

function Options({ items }) {
  return items.map((item, index) => (
    <option value={rawFilters[index]} key={index}>
      {item}
    </option>
  ))
}

function Menu({ handleX, handleY, xLabel, yLabel }) {
  return (
    <div className="chart__menu">
      <div className="menu__item">
        <label htmlFor="xAxis">X Axis</label>
        <select id="xAxis" onChange={handleX} value={xLabel}>
          <Options items={rawFilters} />
        </select>
      </div>
      <div className="menu__item">
        <label htmlFor="yAxis">Y Axis</label>
        <select id="yAxis" onChange={handleY} value={yLabel}>
          <Options items={rawFilters} />
        </select>
      </div>
    </div>
  )
}

export default function Chart({
  label,
  xLabel,
  yLabel,
  handleX,
  handleY,
  data,
}) {
  return (
    <div className="chart">
      <h3>{label}</h3>
      <Menu
        xLabel={xLabel}
        yLabel={yLabel}
        handleX={handleX}
        handleY={handleY}
      />
      <ScatterChart data={data} xLabel={xLabel} yLabel={yLabel} />
    </div>
  )
}
