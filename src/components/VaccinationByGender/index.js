import './index.css'

import {ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {data} = props

  return (
    <div className="chart-container2">
      <h1>Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            data={data}
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill=" #5a8dee" />
            <Cell name="Other" fill=" #2cc6c6" />
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

export default VaccinationByGender
