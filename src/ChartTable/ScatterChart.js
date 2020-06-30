import React from 'react'
import { Scatter } from 'react-chartjs-2'

export default function ScatterChart({ data, xLabel, yLabel, stepSize }) {
  const vals = data.map((item, index) => ({
    x: index,
    y: item[yLabel],
    xLiteral: item[xLabel],
  }))

  const _data = {
    datasets: [
      {
        data: vals,
        borderColor: '#4287f5',
        pointBackgroundColor: '#4287f5',
        lineTension: 0,
        pointRadius: 8,
      },
    ],
  }
  const _options = {
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            stepSize: stepSize ?? 1,
            callback: (_value, index) => {
              const val = vals?.[index]?.xLiteral
              return val
            },
          },
        },
      ],
    },
  }
  return <Scatter data={_data} options={_options} />
}
