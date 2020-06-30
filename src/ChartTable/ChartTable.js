import React, { useState } from 'react'
import useMediaQuery from 'Hooks/useMediaQuery'
import Table from 'Table/Table'
import Chart from 'ChartTable/Chart'
import 'ChartTable/chart-table.css'

function getEventHandler(dispatch) {
  return (event) => dispatch(event.target.value)
}

export default function ChartTable({ data, label, headers }) {
  const [xLabel, setXLabel] = useState('season')
  const [yLabel, setYLabel] = useState('g')
  const handleX = getEventHandler(setXLabel)
  const handleY = getEventHandler(setYLabel)
  const isLarge = useMediaQuery('(min-width: 1100px)')

  if (isLarge) {
    return <Table data={data} label={label} headers={headers} />
  }

  return (
    <Chart
      data={data}
      handleX={handleX}
      handleY={handleY}
      xLabel={xLabel}
      yLabel={yLabel}
    />
  )
}
