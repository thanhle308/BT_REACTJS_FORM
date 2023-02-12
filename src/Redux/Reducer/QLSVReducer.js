const initialState = {
  mangSinhVien: [
    {
      maSV: "T154998",
      hoTen: "Le Chi Thanh",
      sdt: "0948707837",
      email: "test@gmail.com"
    },
  ],
  sinhVien: {
    values: {
      maSV: "",
      hoTen: "",
      sdt: "",
      email: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      sdt: "",
      email: "",
    },
  }
}

export const QLSVReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LUU_DATA_FORM":
      let newSV = {
        values: action.newValues,
        errors: action.newErrors
      }
      state.sinhVien = newSV;
      return {...state}

    default:
      return state
  }
}
