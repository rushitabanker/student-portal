import React from 'react'
import './Test.css'

const Test = () => {
  return (
    <div className='test'>
        <table className="test-table">
            <tr>
                <th>Sr. No.</th>
                <th>Date</th>
                <th>Chapters</th>
                <th>Marks Obt.</th>
                <th>Total Marks</th>
            </tr>
            <tr>
                <td>1</td>
                <td>12/06/2022</td>
                <td>1,2,3</td>
                <td>40</td>
                <td>50</td>
            </tr>
        </table>
    </div>
  )
}

export default Test