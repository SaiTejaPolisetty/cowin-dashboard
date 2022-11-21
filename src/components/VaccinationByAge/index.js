import './index.css'

import {ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {data} = props

  return (
    <div className="chart-container2">
      <h1>Vaccination by Age</h1>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            startAngle={0}
            endAngle={360}
            outerRadius="70%"
            data={data}
            dataKey="count"
          >
            <Cell name="Above 60" fill=" #2d87bb" />
            <Cell name="44-60" fill="  #a3df9f" />
            <Cell name="18-44" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            align="center"
            layout="horizontal"
            verticalAlign="bottom"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
