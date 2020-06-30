import React from 'react'

export default function Body({ data, key }) {
  if (data) {
    return (
      <tbody>
        {data.map((item, index) => (
          <tr key={item[key] ?? index}>
            {Object.values(item).map((val, subIndex) => (
              <td key={`${item[key] ?? subIndex}_${val}`}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    )
  }
  return null
}
