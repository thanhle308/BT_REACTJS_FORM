import React, { Component } from 'react'
import FormSV from './FormSV'
import TableSV from './TableSV'

export default class BTQLSV extends Component {
  render() {
    return (
        <div className='container py-5'>
            <FormSV/>
            <TableSV/>
        </div>
    )
  }
}
