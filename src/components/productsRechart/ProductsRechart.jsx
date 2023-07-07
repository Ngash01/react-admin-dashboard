import React from 'react';
import "./productsRechart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const ProductsRechart = () => {

  const data = [
  
   {
    name: 'Oct',
    'Sales': 4332,
   },
  
   {
    name: 'Nov',
   "Sales": 3321,
   },
   {
    name: 'Dec',
   "Sales": 4626,
   },

  ]

  return (
    <div>
      <div className="">
        <p className='containerLeftHeader'>Sales Performance (Last 3 months)</p>
        <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart   data={data}>
          <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <Line type="monotone" dataKey="Sales" stroke="gray" />

        </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ProductsRechart;