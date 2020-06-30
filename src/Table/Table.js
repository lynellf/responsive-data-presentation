import React from 'react'
import Header from 'Table/Header'
import Body from 'Table/Body'
import './table.css'

export default function Table({ data, label, headers }) {
  if (data) {
    return (
      <div className="table__root">
        <h3 className="table__title">{label}</h3>
        <div className="table__container">
          <table className="table__literal">
            <Header data={data} headers={headers} />
            <Body data={data} />
          </table>
        </div>
      </div>
    )
  }
  return null
}
