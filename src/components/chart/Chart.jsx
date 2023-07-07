import React from 'react';
import "./Chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const Chart = ({title, data, dataKey}) => {

  return (
   <div className='chart'>
    <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer width={"100%"} aspect={4/1}>
        <LineChart data={data} >
          <XAxis dataKey={"name"}/>
          <YAxis/>
          <Line type="monotone" dataKey={dataKey} />
          <Tooltip/>
          < CartesianGrid stroke='#e0dfdf' strokeDasharray ="5 5"/>
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
   </div>
  )
}
