import React, { Component } from 'react'

import { connect } from 'react-redux'

class TableSV extends Component {

  renderTable = () => {
    let stt = 1;
    return this.props.mangSinhVien.map((sv) => {
      return <tr key={sv.maSV}>
        <td>{stt++}</td>
        <td>{sv.maSV}</td>
        <td>{sv.hoTen}</td>
        <td>{sv.sdt}</td>
        <td>{sv.email}</td>
        <td>
          <button onClick={() => { 
              let action ={
                type:"XEM_CHI_TIET",
                svXem: sv
              }
              this.props.dispatch(action)
           }} className='btn btn-success'>Xem</button>
          <button onClick={() => { 
              let action ={
                type:"XOA_ND",
                tkXoa:sv.maSV
              }
              this.props.dispatch(action)

           }} className='btn btn-danger'>Xóa</button>
        </td>
      </tr>
    })
  }

  render() {
    console.log("TableND", this.props);
    return (
      <div className="row">
        <div className="col-12">
          <h2 className='bg-dark text-white'>Danh Sách Sinh Viên</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Số đt</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
                {this.renderTable()}
            </tbody>
          </table>



        </div>
      </div>
    )
  }
}


const mapStateToProps = (rootReducer) => {
  return {
    mangSinhVien: rootReducer.QLSVReducer.mangSinhVien
  }
}

export default connect(mapStateToProps)(TableSV)