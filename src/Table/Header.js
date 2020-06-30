import React from 'react'

export default function Header({ data, headers }) {
  if (data) {
    const keys = headers ?? Object.keys(data[0])
    return (
      <thead>
        <tr>
          {keys.map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
    )
  }
  return null
}
