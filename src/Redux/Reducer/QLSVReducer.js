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
  // console.log("object", state.mangSinhVien);
  switch (action.type) {
    case "LUU_DATA_FORM":
      let newSV = {
        values: action.newValues,
        errors: action.newErrors
      }
      state.sinhVien = newSV;
      return { ...state }

    case "THEM_SV":
      state.mangSinhVien = [...state.mangSinhVien, action.sv]
      return { ...state }

    case "XOA_ND":

      state.mangSinhVien = state.mangSinhVien.filter((nd) => {
        return nd.maSV !== action.tkXoa
      });


      return { ...state };

    case "XEM_CHI_TIET":
      state.sinhVien.values = action.svXem
      //copy đối tượng nguoiDung để đổi địa chỉ ô nhớ
      state.sinhVien = { ...state.sinhVien }

      return { ...state };

    default:
      return state
  }
}
