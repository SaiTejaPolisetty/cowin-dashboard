import './index.css'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const VaccinationCoverage = props => {
  const {data} = props
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="chart-container2">
      <h1>Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart width={800} height={500} data={data} margin={{top: 5}}>
          <XAxis
            dataKey="vaccineDate"
            tick={{stroke: 'grey', strokewidth: 1}}
          />
          <YAxis
            datakey="dose1"
            tickFormatter={DataFormatter}
            tick={{storke: 'grey', stokeWidth: 0}}
          />
          <Legend wrapperStyle={{padding: 30}} />
          <Bar
            dataKey="dose1"
            name="Dose 1"
            fill=" #2d87bb"
            barSize="20%"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="dose2"
            name="Dose 2"
            fill="#f54394"
            barSize="20%"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
