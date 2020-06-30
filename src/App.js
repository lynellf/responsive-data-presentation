import React from 'react'
import './App.css'
import { giannisData, lebronData, labels } from './data'
import Table from 'Table/Table'
import FlexTable from 'FlexTable/FlexTable'
import ChartTable from 'ChartTable/ChartTable'

function App() {
  const { per_game } = giannisData
  const { per_game: lePerGame } = lebronData
  const label = 'Giannis Antetokounmpo Per Game Stats (Table)'
  const playoffsLabel = 'LeBron James Per Game Stats (Flexbox)'
  return (
    <div className="App">
      <Table data={per_game} label={label} headers={labels.per_game} />
      <FlexTable
        data={lePerGame}
        label={playoffsLabel}
        headers={labels.per_game}
      />
      <ChartTable data={per_game} label={label} headers={labels.per_game} />
    </div>
  )
}

export default App
