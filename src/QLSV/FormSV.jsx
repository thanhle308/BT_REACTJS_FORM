import React, { Component } from 'react'
import { connect } from 'react-redux';

class FormSV extends Component {

    handleOnChange = (event) => {
        let { value, name } = event.target;

        let newValues = { ...this.props.sinhVien.values };
        newValues[name] = value;

        let typeform = event.target.getAttribute("typeform");

        let messageError = "";


        // Kiểm tra rỗng
        if (value.trim() === "") {
            messageError = `${name} không được để trống`;
        }

        //Kiểm tra email 
        let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (typeform === "email") {
            //neu la email
            if (!regexp.test(value)) {
                //value ko dung voi regex
                messageError = `Email không đúng định dạng`;
            }
        }

        let newErrors = { ...this.props.sinhVien.errors };
        newErrors[name] = messageError;


        // Day du lieu values va error len reducer
        let action = {
            type: "LUU_DATA_FORM",
            newValues,
            newErrors,
        }
        this.props.dispatch(action);
    }

    handleOnSubmit = (event) => {
        //ngan load lai trang
        event.preventDefault();

        let isValid = true;

        //ktra con errorr tren form ko
        for (const property in this.props.sinhVien.errors) {
            if (this.props.sinhVien.errors[property] !== "") {
                isValid = false;
            }
        }
        for (const property in this.props.sinhVien.values) {
            if (this.props.sinhVien.values[property] === "") {
                isValid = false;
            }
        }
        if (isValid) {
            let action = {
                type: "THEM_SV",
                sv: this.props.sinhVien.values
            }
            this.props.dispatch(action);
        }else {
            alert("Form không được để trống!")
        }

        


    }

    render() {
        // console.log("hihi", this.props.sinhVien)
        let { maSV, hoTen, sdt, email } = this.props.sinhVien.values;
        let { errors } = this.props.sinhVien;
        return (
            <div className="row">
                <div className="col-12">
                    <h2 className='bg-dark text-white'>Form Đăng Ký</h2>

                    <form  onSubmit={this.handleOnSubmit}>
                        <div className="row py-3">
                            <div className="col">
                                <label htmlFor="maSV"> Mã SV</label>
                                <input value={maSV} onChange={(event) => {
                                    this.handleOnChange(event)
                                }} name='maSV' type="text" className="form-control" placeholder="Mã SV" />
                                <p className='text-danger'>{errors.maSV}</p>
                            </div>
                            <div className="col">
                                <label htmlFor="hoTen">Họ tên</label>
                                <input value={hoTen} onChange={this.handleOnChange} name='hoTen' type="text" className="form-control" placeholder="Họ Tên" />
                                <p className='text-danger'>{errors.hoTen}</p>
                            </div>
                        </div>

                        <div className="row py-3">

                            <div className="col">
                                <label htmlFor="sdt">Số điện thoại</label>
                                <input value={sdt} onChange={this.handleOnChange} name='sdt' type="text" className="form-control" placeholder="Số điện thoại" />
                                <p className='text-danger'>{errors.sdt}</p>
                            </div>

                            <div className="col">
                                <label htmlFor="email">Email</label>
                                <input value={email} onChange={this.handleOnChange} typeform="email" name='email' type="text" className="form-control" placeholder="Email" />
                                <p className='text-danger'>{errors.email}</p>
                            </div>
                        </div>

                        <div className='py-3'>
                            <button className='btn btn-success mr-5'>Thêm Sinh Viên</button>

                        </div>

                    </form>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        sinhVien: rootReducer.QLSVReducer.sinhVien
    }
}
export default connect(mapStateToProps)(FormSV)