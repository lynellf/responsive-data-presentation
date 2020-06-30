import React from 'react'
import './flex-table.css'

function Header({ headers }) {
  const cells = headers.map((header, index) => (
    <div className="flex-table__header-cell" key={index}>
      {header}
    </div>
  ))

  return (
    <div className="flex-table__header">
      <div className="flex-table__row">{cells}</div>
    </div>
  )
}

function Body({ data }) {
  const rows = data.map((row, index) => (
    <div key={index} className="flex-table__row">
      {Object.values(row).map((val, subIndex) => (
        <div className="flex-table__cell" key={subIndex}>
          {val}
        </div>
      ))}
    </div>
  ))

  return <div className="flex-table__body">{rows}</div>
}

export default function FlexTable({ data, label, headers }) {
  return (
    <div className="flex-table__root">
      <h3 className="flex-table__title">{label}</h3>
      <div className="flex-table__container">
        <Header headers={headers} />
        <Body data={data} />
      </div>
    </div>
  )
}
