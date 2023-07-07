import React from 'react';
import "./widgetLg.css"

const WidgetLg = () => {

  const Button = ({type})=>{
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <p className='widgetLgheader'>Latest Transactions</p>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>

        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img className='widgetImg' src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <span className="widgetLgName">Susan Carol</span>
          </td> 
          <td className='widgetLgDate'>2 June 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type={"Approved"}/>
          </td>
        </tr>

        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img className='widgetImg' src="https://images.unsplash.com/photo-1618298363483-e31a31f1a1e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <span className="widgetLgName">Anna Brett</span>
          </td> 
          <td className='widgetLgDate'>2 June 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type="Declined"/>
          </td>
        </tr>

        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img className='widgetImg' src="https://images.unsplash.com/photo-1619300026534-8e8a76941138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <span className="widgetLgName">Jason Joe</span>
          </td> 
          <td className='widgetLgDate'>2 June 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type={"In Progress"}/>
          </td>
        </tr>

        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img className='widgetImg' src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <span className="widgetLgName">Charles Etoroma</span>
          </td> 
          <td className='widgetLgDate'>2 June 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type={"Pending"}/>
          </td>
        </tr>
      </table>

    </div>
  )
}

export default WidgetLg;
